import("next").NextConfig;

const nextConfig = async () => {
  return {
    i18n: {
      locales: ["pt-BR"],
      defaultLocale: "pt-BR",
    },
    env: {
      api: process.env.api,
      recaptcha: process.env.recaptcha,
    },
    trailingSlash: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "http",
          hostname: "**",
        },
      ],
    },
    reactStrictMode: false,
    compiler: {
      styledComponents: true,
    },
  };
};

module.exports = nextConfig();
