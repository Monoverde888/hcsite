import { keyframes } from '@emotion/react'
import Image from 'next/image'
import { Box, Card, Text } from 'theme-ui'
import Icon from './icon'

export const unfold = keyframes({
  from: { transform: 'scaleY(0)' },
  to: { transform: 'scaleY(100%)' }
})

const Announcement = ({
  caption,
  copy,
  iconLeft,
  iconRight,
  imgSrc,
  imgAlt,
  color = 'accent',
  textColor = 'secondary',
  sx = {},
  width,
  ...props
}) => (
  <Card
    as={props.href ? 'a' : 'div'}
    variant="interactive"
    sx={{
      variant: 'cards.translucent',
      mx: 'auto',
      maxWidth: 'narrow',
      width: width ? width : '100%',
      textAlign: 'left',
      textDecoration: 'none',
      lineHeight: 'caption',
      display: 'flex',
      alignItems: 'center',
      p: [2, 2],
      px: 3,
      mb: [3, 4],
      mt: [null, -3, -5],
      transform: 'scale(1)',
      '@media (prefers-reduced-motion: no-preference)': {
        animation: `${unfold} 0.5s ease-out`
      },
      svg: { flexShrink: 'none' },
      ...sx
    }}
    {...props}
  >
    {iconLeft && (
      <Icon
        glyph={iconLeft}
        sx={{ mr: [2, 3], ml: 2, color, display: ['none', 'block'] }}
      />
    )}
    {imgSrc && (
      <Box sx={{ mr: [2, 3], ml: 2, width: 32, flexShrink: 0 }}>
        <Image src={imgSrc} alt={imgAlt} width={32} height={32} />
      </Box>
    )}
    <Text
      as="p"
      sx={{
        flex: '1 1 auto',
        strong: { display: ['inline', 'block'], color: textColor }
      }}
    >
      <strong>{copy}</strong>
      {caption && (
        <Text as="span" variant="caption" color={textColor}>
          {' '}
          {caption}
        </Text>
      )}
    </Text>
    {iconRight && <Icon glyph={iconRight} sx={{ ml: [2, 3], color }} />}
  </Card>
)

export default Announcement
