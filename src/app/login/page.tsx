"use client";   
import styles from './login.module.css';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('登录信息:', { email, password, rememberMe });
  };

  return (
    <div className={styles.container}>
      {/* 左侧图片区域 - 60% */}
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
            alt="Login background" 
            className={styles.backgroundImage}
          />
          <div className={styles.overlay}>
            <h1 className={styles.title}>欢迎回来</h1>
            <p className={styles.subtitle}>登录您的账户以继续</p>
          </div>
        </div>
      </div>

      {/* 右侧表单区域 - 40% */}
      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <h2>石头科技</h2>
          </div>
          
          <h3 className={styles.formTitle}>登录账户</h3>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">邮箱地址</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入您的邮箱"
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="password">密码</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入您的密码"
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.options}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={styles.checkbox}
                />
                记住我
              </label>
              <a href="#" className={styles.forgotPassword}>忘记密码？</a>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              登录
            </button>
          </form>
          
          <div className={styles.divider}>
            <span>或</span>
          </div>
          
          <div className={styles.socialLogin}>
            <button className={`${styles.socialButton} ${styles.google}`}>
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google 登录
            </button>
          </div>
          
          <div className={styles.signupLink}>
            还没有账户？ <a href="/register">立即注册</a>
          </div>
        </div>
      </div>
    </div>
  );
}