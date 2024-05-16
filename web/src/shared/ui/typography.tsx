import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/shared/lib'

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      title: '',
      subTitle: ''
    }
  }
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {}

function Typography({ className, variant, ...props }: TypographyProps) {
  return <div className={cn(typographyVariants({ variant }), className)} {...props} />
}
