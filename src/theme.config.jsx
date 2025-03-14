import TagPills from "@/components/TagPills";
import { iceland } from "@/utils/fonts";
import { useConfig } from "nextra-theme-docs";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase: "https://github.com/CosmWasm/docs/blob/main",
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 0 686 686">
        <path
          fill="url(#a)"
          fillRule="evenodd"
          d="M343.383 685.194c189.211 0 342.597-153.386 342.597-342.597C685.98 153.386 532.594 0 343.383 0 154.172 0 .786 153.386.786 342.597c0 189.211 153.386 342.597 342.597 342.597ZM180.868 171.251c.002 56.646 36.287 102.526 80.836 131.373 42.459 27.493 92.817-.987 135.911-27.473 54.466-33.473 125.131-36.866 184.276-2.718 22.523 13.003 41.15 30.19 55.499 50.009 4.198 5.799 14.122 3.044 13.554-4.092-7.768-97.723-61.848-190.101-153.167-242.824-31.291-18.066-34.347-14.317-40.825-6.368-9.788 12.01-27.391 33.609-162.026 4.023-41.622-9.147-88.489.915-103.376 40.845-6.708 17.992-10.679 37.641-10.682 57.225ZM276.4 569.188c49.056-28.324 70.647-82.688 73.354-135.692 2.581-50.517-47.263-79.888-91.747-103.966-56.222-30.432-94.493-89.933-94.493-158.229 0-26.006 5.571-50.731 15.561-73.068 2.923-6.534-4.425-13.751-10.321-9.692C88.007 144.13 35.045 237.154 35.045 342.6c0 36.132 4.775 36.903 14.898 38.539 15.296 2.472 42.802 6.917 84.497 138.307 12.89 40.619 45.037 76.177 87.061 69.104 18.936-3.187 37.938-9.572 54.899-19.362Zm142.626-277.342c47.257-24.157 105.133-32.641 154.191-4.319 16.959 9.794 31.989 23.058 44.217 37.863 27.137 32.858 12.417 78.477-16.315 109.949-92.94 101.804-83.037 127.848-77.529 142.33 3.644 9.585 5.364 14.106-25.928 32.172-91.318 52.722-198.36 53.368-286.875 11.234-6.464-3.076-3.887-13.048 3.233-13.785 24.339-2.516 48.537-10.054 71.059-23.058 59.146-34.147 91.54-97.042 89.784-160.947-1.39-50.563-.876-108.415 44.163-131.439Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient id="a" x1="128.232" x2="566.756" y1="28.779" y2="653.676" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCECB2" />
            <stop offset=".26" stopColor="#FF8B89" />
            <stop offset=".521" stopColor="#FC8ADC" />
            <stop offset=".755" stopColor="#7954FF" />
            <stop offset="1" stopColor="#70BCFF" />
          </linearGradient>
        </defs>
      </svg>
      <span className={iceland.className} style={{ marginLeft: ".5rem", fontSize: "1.5rem", lineHeight: 1 }}>
        CosmWasm Docs
      </span>
    </>
  ),
  editLink: { content: "Edit this page on GitHub" },
  footer: {
    content: (
      <div>
        <p>CosmWasm is proudly created and maintained by Confio. CosmWasm is a registered trademark of Confio GmbH.</p>
        <p style={{ marginTop: "8px" }}>

        This site is published by{" "}
          <a href="https://www.skip.build/" target="_blank" style={{ textDecoration: "underline" }}>
          Skip Protocol Inc. (dba Interchain Labs)
          </a>
        .
        </p>
      </div>
    ),
  },
  main: ({ children }) => (
    <>
      <TagPills />
      {children}
    </>
  ),
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  head: function useHead() {
    const config = useConfig();

    const title = config.title !== "Index" ? `${config.title} – CosmWasm` : "Official guide to CosmWasm development";
    const description =
      config.frontMatter.description ||
      "Learn how to build smart contracts for CosmWasm-enabled blockchains, how they can interact with the chain and how to integrate CosmWasm into your blockchain.";
    const socialPreviewImg = config.frontMatter.image || "https://docs.cosmwasm.com/social-preview.png";

    return (
      <>
        <title>{title}</title>

        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={socialPreviewImg} />

        <meta name="apple-mobile-web-app-title" content="CosmWasm Docs" />
        <meta name="application-name" content="CosmWasm Docs" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialPreviewImg} />
        <meta name="twitter:site" content="@CosmWasm" />
        <meta name="twitter:creator" content="@CosmWasm" />

        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/safari-pinned-tab.svg" rel="mask-icon" color="#000" />

        <script
          src="https://widget.kapa.ai/kapa-widget.bundle.js"
          data-website-id="75a2c489-261c-4a74-a2f1-ddb6b0cc1a95"
          data-project-name="InterchainStack"
          data-user-analytics-fingerprint-enabled="true"
          data-project-color="#1878FF"
          data-project-logo="/spirograph_white.svg"
          data-modal-image="/mstile-144x144.png"
          data-modal-title="CosmWasm Docs AI"
          data-modal-disclaimer="This is a custom LLM for the Interchain Stack with access to developer documentation and resources across the core Cosmos components. Please note that answers are generated by an AI so please use your best judgement before implementing. Please do not enter sensitive information, or personally identifiable information."
          data-modal-ask-ai-input-placeholder="Ask me a question about CosmWasm..."
          data-modal-disclaimer-text-color="#000000"
          data-modal-disclaimer-font-size="14px"
          async
        />
      </>
    );
  },
};

