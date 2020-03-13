
export default {
  title: 'Icons',
  decorators: [
    storyFn => `<div class="has-text-black" style="font-size: 2em;">${storyFn()}</div>`
  ]
}

export const Carets = () => `
  <i class="icon caret-up"></i>
  <i class="icon caret-down"></i>
  <i class="icon caret-left"></i>
  <i class="icon caret-right"></i>
`

export const Symbols = () => `
  <i class="icon cancel-circle"></i>
  <i class="icon checkmark"></i>
  <i class="icon cross"></i>
  <i class="icon radio-unchecked"></i>
`
export const SocialMedia = () => `
<i class="icon facebook2"></i>`
