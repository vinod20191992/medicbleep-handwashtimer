import Reactotron from 'reactotron-react-native'

Reactotron.configure({
  name: 'HandWashTimer', // name of the product
})
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: () => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect() // connect to the reactotron
