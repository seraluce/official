"use client";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState, useRef, KeyboardEvent } from "react";
import { Copy, Check, Loader2 } from "lucide-react";

export default function DouyinIframe() {
  const [inputValue, setInputValue] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 提取抖音视频ID的函数
  const extractVideoId = (url: string): string | null => {
    try {
      console.log("尝试从URL提取视频ID:", url);
      
      // 匹配各种可能的抖音链接格式
      const patterns = [
        /https?:\/\/(?:www\.)?douyin\.com\/video\/(\d+)/,
        /(?:www\.)?douyin\.com\/video\/(\d+)/,
        /douyin\.com\/video\/(\d+)/,
        /video\/(\d+)/,
        /vid=(\d+)/,
        /\/(\d+)(?:\?|$)/, // 匹配URL末尾的数字ID
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
          console.log("匹配模式:", pattern);
          console.log("提取到的视频ID:", match[1]);
          return match[1];
        }
      }

      console.log("未能匹配到视频ID");
      return null;
    } catch (error) {
      console.error("提取视频ID失败:", error);
      return null;
    }
  };

  // 改进的URL解析方法，使用API路由
  const resolveShortUrl = async (shortUrl: string): Promise<string> => {
    try {
      console.log("开始解析短链接:", shortUrl);
      
      // 使用自建API路由处理URL展开
      const response = await fetch('/api/expand-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: shortUrl })
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("API返回的展开URL:", data.expandedUrl);
        
        if (data.manualRequired) {
          // 需要用户手动获取
          const manualUrl = prompt(
            "自动解析失败，请手动获取完整URL：\n\n" +
            "1. 在新标签页中打开以下链接：\n" +
            shortUrl + "\n\n" +
            "2. 等待页面跳转完成后，复制地址栏中的完整URL\n\n" +
            "3. 粘贴到这里："
          );
          
          return manualUrl || shortUrl;
        }
        
        return data.expandedUrl;
      } else {
        throw new Error('API调用失败');
      }
    } catch (error) {
      console.log("API解析失败，使用备用方案:", error);
      
      // 备用方案：直接提示用户
      const manualUrl = prompt(
        "无法自动解析URL，请手动操作：\n\n" +
        "1. 在新标签页中打开以下链接：\n" +
        shortUrl + "\n\n" +
        "2. 等待页面跳转完成后，复制地址栏中的完整URL\n\n" +
        "3. 粘贴到这里："
      );
      
      return manualUrl || shortUrl;
    }
  };

  // 转换为iframe URL
  const convertToIframeUrl = (videoId: string): string => {
    return `https://open.douyin.com/player/video?vid=${videoId}`;
  };

  // 处理输入和解析
  const handleParse = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    try {
      console.log("开始解析输入:", inputValue);
      
      // 首先提取短链接
      const urlMatch = inputValue.match(/https?:\/\/v\.douyin\.com\/[a-zA-Z0-9_\-\/]+/);
      if (!urlMatch) {
        console.log("未找到短链接");
        alert("未找到有效的抖音短链接");
        setLoading(false);
        return;
      }

      const shortUrl = urlMatch[0];
      console.log("找到短链接:", shortUrl);

      // 实际访问短链接获取重定向后的URL
      const resolvedUrl = await resolveShortUrl(shortUrl);
      console.log("解析后的URL:", resolvedUrl);

      const videoId = extractVideoId(resolvedUrl);
      if (videoId) {
        const directUrl = `https://www.douyin.com/video/${videoId}`;
        const iframeUrl = convertToIframeUrl(videoId);
        
        console.log("提取的视频ID:", videoId);
        console.log("生成的直接URL:", directUrl);
        console.log("生成的iframe URL:", iframeUrl);
        
        setVideoUrl(directUrl);
        setIframeUrl(iframeUrl);
      } else {
        console.log("无法提取视频ID，解析后的URL为:", resolvedUrl);
        alert("无法从解析后的链接中提取视频ID");
      }
    } catch (error) {
      console.error("解析过程出错:", error);
      alert("解析失败，请检查链接格式");
    } finally {
      setLoading(false);
    }
  };

  // 处理回车键
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleParse();
    }
  };

  // 复制iframe代码
  const copyIframeCode = () => {
    if (!iframeUrl) return;

    const iframeCode = 
`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
  <div style="width: 100%; max-width: 896px; aspect-ratio: 16/9;">
    <iframe 
      src="${iframeUrl}" 
      title="Douyin Video" 
      style="width: 100%; height: 100%; border: 0; border-radius: 8px;"
      frameborder="0" 
      scrolling="no"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</div>`;

    navigator.clipboard.writeText(iframeCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // 自动提取URL的函数
  const extractUrlFromText = (text: string): string | null => {
    // 匹配各种URL格式的正则表达式
    const urlPatterns = [
      /https?:\/\/v\.douyin\.com\/[a-zA-Z0-9_\-\/]+/,
      /https?:\/\/(?:www\.)?douyin\.com\/video\/\d+/,
      /https?:\/\/[^\s]+/  // 通用URL匹配作为后备
    ];

    for (const pattern of urlPatterns) {
      const match = text.match(pattern);
      if (match) {
        return match[0];
      }
    }
    
    return null;
  };

  // 处理输入变化，自动提取URL
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // 如果输入包含URL，自动提取并清理
    if (value.includes('http')) {
      const extractedUrl = extractUrlFromText(value);
      if (extractedUrl && extractedUrl !== value) {
        // 自动清理输入框，只保留URL
        setTimeout(() => {
          setInputValue(extractedUrl);
        }, 100);
      }
    }
  };

  // 处理粘贴事件，自动提取URL
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    
    // 提取URL
    const extractedUrl = extractUrlFromText(pastedText);
    
    if (extractedUrl) {
      // 设置提取的URL
      setInputValue(extractedUrl);
      // 自动触发解析
      setTimeout(() => {
        handleParse();
      }, 200);
    } else {
      // 如果没有找到URL，保持原样
      setInputValue(pastedText);
    }
  };

  // 测试用的示例数据
  const testExample = "9.23 dnd:/ G@I.VL 10/15 第60集|《爱情公寓》第二季|第四集（如有侵权|联系立删） # 爱情公寓 # 下饭剧 # 电子榨菜 # 喜剧 # 精彩片段  https://v.douyin.com/8X_ddmy_zq8/ 复制此链接，打开Dou音搜索，直接观看视频！";

  const loadTestExample = () => {
    setInputValue(testExample);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">抖音视频解析器</h1>
        <p className="text-gray-600">
          输入抖音分享链接，自动提取视频并生成可嵌入的iframe代码
        </p>
      </div>

      {/* 输入区域 */}
      <div className="mb-8">
        <Field orientation="horizontal">
          <Input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onPaste={handlePaste}
            onKeyDown={handleKeyDown}
            placeholder="请输入或粘贴抖音分享链接..."
            className="w-full flex-1"
            disabled={loading}
          />
          <Button onClick={handleParse} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                解析中...
              </>
            ) : (
              "解析链接"
            )}
          </Button>
        </Field>
      </div>

      {/* 结果展示区域 */}
      {videoUrl && (
        <div className="space-y-6">
          {/* 视频信息 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">解析结果</h2>
            <div className="space-y-2">
              <div>
                <span className="font-medium">解析链接:</span>
                <p className="text-blue-600 break-all">{videoUrl}</p>
              </div>
              <div>
                <span className="font-medium">iframe链接:</span>
                <p className="text-green-600 break-all">{iframeUrl}</p>
              </div>
            </div>
          </div>

          {/* 视频播放区域 */}
          <div className="bg-white rounded-lg  overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">视频预览</h3>
            </div>
            <div className="p-4">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={iframeUrl}
                    title="Douyin Video"
                    className="w-full h-full rounded-lg border-0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    scrolling="no"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* iframe代码复制区域 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">嵌入代码</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={copyIframeCode}
                className="flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    已复制
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    复制代码
                  </>
                )}
              </Button>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              {`<iframe 
  src="${iframeUrl}" 
  title="Douyin Video" 
  width="100%" 
  height="500" 
  frameborder="0" 
  allowfullscreen>
</iframe>`}
            </pre>
          </div>
        </div>
      )}

      {/* 使用说明 */}
      {!videoUrl && !loading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">使用说明</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• 支持抖音分享文本格式，自动提取其中的短链接</li>
            <li>• <strong>智能URL提取</strong>：粘贴或输入文本时自动识别并清理多余内容，只保留有效URL</li>
            <li>• <strong>自动解析</strong>：尝试自动获取重定向后的完整URL</li>
            <li>• <strong>手动辅助</strong>：如果自动解析失败，会提示您手动获取完整URL</li>
            <li>• 示例输入：<code className="bg-blue-100 px-2 py-1 rounded">https://v.douyin.com/8X_ddmy_zq8/</code></li>
            <li>• 按回车键或点击"解析链接"按钮处理输入</li>
            <li>• 粘贴分享文本时会自动提取URL并开始解析</li>
          </ul>
        </div>
      )}

      {/* 加载状态 */}
      {loading && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-yellow-600 animate-spin" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-900">正在解析链接...</h3>
              <p className="text-yellow-800">正在访问短链接并获取重定向后的完整URL</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
