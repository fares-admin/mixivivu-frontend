import React from 'react'
import styles from './Skeleton.module.css'

interface SkeletonProps {
  className?: string
  width?: number | string
  height?: number | string
}

export const Skeleton = ({ className, width, height }: SkeletonProps) => {
  return <div style={{ width, height }} className={[styles.skeleton, className].join(' ')} />
}
