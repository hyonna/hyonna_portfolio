'use client'

import { colors } from '@/lib/theme'

export default function Section({ id, title, icon: Icon, children }: any) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24 border-b" style={{ borderColor: colors.border }}>
      <div className="max-w-5xl mx-auto px-6">
        {title && (
          <div className="flex items-center gap-3 mb-8">
            <div className="h-9 w-9 grid place-items-center rounded-xl" style={{ background: colors.border }}>
              <Icon size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${colors.pink}, ${colors.pinkSoft})` }}
              >
                {title}
              </span>
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
