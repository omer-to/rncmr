**_Core Component: TextInput_**

_props_
• value - The current text in the input field.
• onChangeText - A function called each time the text changes. The new value is the first
argument.
• onSubmitEditing - A function called when the user presses the return/next key to submit/move
to the next field.
--javascript
    autocapitalize: "sentences" | "none" | "words" | "characters"
    autoCorrect: Bool
    editable: Bool
    keyboardType: "default" | "numeric" | "email-address" | "phone-pad"
    multiline: Bool
    placeholder: String
    placeholderTextColor: Color
    returnKeyType: 