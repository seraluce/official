import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // 尝试获取重定向后的URL
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      return NextResponse.json({
        expandedUrl: response.url,
        statusCode: response.status
      });
    } catch (fetchError) {
      // 如果直接fetch失败，返回错误信息
      return NextResponse.json({
        expandedUrl: url,
        error: 'Unable to expand URL automatically',
        manualRequired: true
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}