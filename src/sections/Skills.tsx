import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { FadeIn } from '../components/motion/FadeIn'
import { useI18n } from '../i18n/I18nProvider'

export function Skills() {
  const { t } = useI18n()
  const portfolio = t.portfolio

  return (
    <Section
      id="skills"
      eyebrow={t.skills.eyebrow}
      title={t.skills.title}
      description={t.skills.description}
    >
      <FadeIn>
        <div className="flex flex-wrap gap-2">
          {portfolio.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </FadeIn>
    </Section>
  )
}

