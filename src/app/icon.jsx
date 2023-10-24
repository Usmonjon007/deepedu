import { ImageResponse } from "next/server";
import Image from "next/image";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 192,
    height: 192,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <img
                src={`http://localhost:3000/android-chrome-192x192.png`}
                alt="icon"
            />
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse"s width and height.
            ...size,
        }
    );
}
