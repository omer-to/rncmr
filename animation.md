1. Pick an initial animation value
2. map it to a style property
3. Start the animation
4. animation updates all mapped dependents

***Animation Types***
Animated.timing():  animating a value over time. default easing is Easing.easeInOut

***Animated.timing()***
    *arguments*

    animation value

    config: {
        delay: Number,
        duration: Number,
        easing: Easing.easeInOut
    }

--
    *methods*

    start(callback): To start the animation. Callback function is called when the animation stops or finished
    stop(callback)
    reset(callback)

***Animated.Value and Animated.ValueXY***
Combining two Animation values via multiplication, addition, division, subtraction, and modulo:

Each property can be run through an interpolation first. An interpolation maps input ranges to output ranges, typically using a linear interpolation but also supports easing functions. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value.

