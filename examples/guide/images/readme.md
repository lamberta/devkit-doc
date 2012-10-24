## Images

The SDK provides a lot of features to handle images. There are several options
to display images and there are ways to pack images in resource files which allows
very easy access from your code.

All these demos can also be found on the `example` tab in the SDK.

**Image demos:**
- [Displaying an image](@todo basic/readme.html)
- [9-Slice image scaling](@todo nineslice/readme.html)
- [9-Slice image scaling in an animation](@todo ninesliceanimation/readme.html)
- [Packing images in sprite sheets](@todo resources/readme.html)
- [Using a sprite sheet](@todo spritesheet/index.html)

**Related api docs:**
- [View class](@todo link to view class)
- [ImageView class](@todo link to image view class)
- [ScaledImageView class](@todo link to scaled image view class)
- [Image class](@todo link to image class)

## Displaying images

### Displaying an image

[The first example](@todo basic/readme.html) demonstrates the most simple way to display
an image, using the [ImageView class](@todo link to imageview).

### Using 9-Slice image scaling

If you want to create a button or a window it's easy to be able to define
the corners or the end caps of the element and make the center scale. This
can be achieved with the [ImageScaleView class](@todo link to imagescaleview).
[This demo](@todo nineslice/readme.html) demonstrates a basic usage of the
nine-slice scaling view.

### Using 9-Slice image scaling in an animation

[This example](@todo ninesliceanimation/readme.html) shows how to use the
[animation classes](@todo link to animation) in combination with the
[ImageScaleView class](@todo link to imagescaleview).

## Image resources

When you build an application all images will be packed in sprite sheets.

### Packing images in sprite sheets

With metadata files you can control the way images are packed in sprite sheets.
[This demo](@todo resources/readme.html) shows some available packing options.

### Using a sprite sheet

Even when an image is packed in a spite sheet you can still access all the original
data of the image. The [Image class](@todo link to image class) has a method to
retrieve information about the location of the image whithin the spite sheet which
is demonstrated in [this example](@todo spritesheet/index.html).

