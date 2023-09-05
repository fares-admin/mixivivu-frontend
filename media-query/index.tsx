/* eslint-disable import/no-extraneous-dependencies */
import { createMedia } from '@artsy/fresnel'

const MixiAppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    mdless: 1025,
    md: 1025,
    lg: 1200,
  },
})

// Make styles for injection into the header of the page
export const mediaStyles = MixiAppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = MixiAppMedia

export const isMobileBreakpoint = (screenWidth) => screenWidth <= 1025
