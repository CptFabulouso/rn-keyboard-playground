# Keyboard examples

## Login Layout

- Inputs within ScrollView

ios: works fine

## Form Layout

- Multiple inputs within ScrollView with focusing next input on `enter` press

ios: works fine

## Input after scroll

- e.g. Chat like layout

ios: works fine, but ScrollView should move with TextInput. Might be solved with contentInset: TBD

## Relayout

- Inputs wrapped within View, React logo is animated to fill available space

ios: works fine

## Keyboard within Modal

- Modal is wrapping KeyboardAvoidingView

ios: works fine

## Keyboard wrapping Modal

- KeyboardAvoidingView is wrapping Modal

ios: does not work, content in Modal is not moved

## Keyboard within rn-modal

- Same as `Keyboard within Modal` example, but uses react-native-modal

ios: works fine

## Multiline Input

- Multiple multiline inputs

ios: works, but does not scroll to the end of input. `scrollEnabled` has to be set to `false`

## Content Inset

- Does not use KeyboardAvoidingView, but sets `contentInset={{bottom: keyboardHeight}}`

ios: works, but when focusing lowest input, ScrollView does not return to previous and leaves space at bottom.
