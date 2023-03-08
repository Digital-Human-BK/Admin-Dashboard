const Card = {
  baseStyle: ({ colorMode }: any) => ({
    p: '22px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    minWidth: '0px',
    wordWrap: 'break-word',
    backgroundClip: 'border-box',
    bg: colorMode === 'dark' ? 'gray.700' : 'white',
    boxShadow: '0px 3.5px 5.5px rgba(0, 0, 0, 0.02)',
    borderRadius: '15px'
  })
}

export const CardComponent = {
  components: {
    Card
  }
}
