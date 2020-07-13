**_Core Component: Image_**

**props**

    source: Object

    onLoad: Function

    resizeMode: cover | contain | stretch | repeat (iOS) | center

    aspectRatio (on style): Number (width/height)

There are two way to include images in an app:

    1. Bundle an image with our code
    require = relativePath: String => imageId: Number


    2. Download an image from a URI
