import s from '@/styles/(sections)/section.module.scss'
import { ReactElement } from 'react'

const SectionTitle = ({ id, kicker, title }: { id?: string; kicker?: string; title: string }): ReactElement => (
  <div id={id} className={s.sectionTitle}>
    {kicker && <span className={s.kicker}>{kicker}</span>}
    <h2 className={s.title}>{title}</h2>
  </div>
)
export default SectionTitle
