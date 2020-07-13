in React Native (unlike on the web), we’re not allowed to render
string values outside of Text (even empty strings).

!!mightBeEmptyString && <Component />
