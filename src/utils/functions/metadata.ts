import { Metadata } from "next";

export const generateMetadata = ({
    title = `DEVMONIX TECHNOLOGY | Innovative Softwares with Precision`,
    description = `DEVMONIX TECHNOLOGY | Crafting cutting-edge software solutions tailored to your needs. From concept to deployment, we build the future, today.`,
    image = "/logo-main.png",
    icons = [
        {
            rel: "dev-logo",
            sizes: "32x32",
            url: "/logo-main.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/logo-main.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/logo-main.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@devmonixtechnology",
    },
    // metadataBase: new URL(process.env.APP_DOMAIN!),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
