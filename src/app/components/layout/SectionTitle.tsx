type SectionTitleProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export default function SectionTitle({ children, variant = 'primary' }: SectionTitleProps) {
  const className = variant === 'primary' ? 'section-title' : 'section-subtitle'

  return <h2 className={className}>{children}</h2>
}
