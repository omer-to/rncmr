***Core Component: Button***
Supports a minimal level of customization.


***Button Props***
(Doesn't take a `style` prop)
1. Handler to be called when the user taps the button.
`onPress`
Function
Required

2. Text to display inside the button
`title`
String
Required

**Platform Gnostic**
3. Color of the text (iOS), or background color of the button (Android)
`color`
Color
Optional

4. If true, disable all interactions for this component.
`disabled`
Bool
Optional


**Android Only**
5. Designates the next view to receive focus when the user navigates down.
`nextFocusDown`
Number
Optional

6. Designates the next view to receive focus when the user navigates forward.
`nextFocusForward`
Number
Optional

7. Designates the next view to receive focus when the user navigates left.
`nextFocusLeft`
Number
Optional

8. Designates the next view to receive focus when the user navigates right.
`nextFocusRight`
Number
Optional

9. Designates the next view to receive focus when the user navigates up.
`nextFocusUp`
Number
Optional

10. If true, doesn't play system sound on touch
`touchSoundDisabled`
