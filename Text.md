**_ Core Component: Text _**

    Text component has an intrinsic size!

    It is equivalent to <p> with inline-block display.

    Occupies space as much as its content, but starts a new line.

**props**

    • textAlign - 'left' | 'right' | 'center' | 'justify' (iOS only) | 'auto'
    • numberOfLines - The number of lines to allow before truncating the text.
    • ellipsizeMode - How text should be truncated when it exceeds numberOfLines.
    'head' | 'middle' | 'tail' | 'clip' (iOS only).

**style inheritance**

    Only nested Text elements inherit from its parent Text element.
