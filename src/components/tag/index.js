import Link from 'next/link'

const configMap = {
  green: {
    color: '#52c41a',
    background: '#f6ffed',
    borderColor: '#b7eb8f'
  },
  red: {
    color: "#f5222d",
    background: "#fff1f0",
    borderColor: "#ffa39e"
  },
  orange: {
    color: "#fa8c16",
    background: "#fff7e6",
    borderColor: "#ffd591"
  },
  blue: {
    color: "#1890ff",
    background: "#e6f7ff",
    borderColor: "#91d5ff"
  },
  purple: {
    color: "#722ed1",
    background: "#f9f0ff",
    borderColor: "#d3adf7"
  },
  defalut: {
    color: "rgba(0,0,0,.65)",
    background: "#fafafa",
    borderColor: "#d9d9d9"
  },
}

export default function Tag({ children, color, }) {
  const {color:textColor, background, borderColor} = configMap[color] || configMap['defalut'];
  return (
    <span className="border py-0 px-1 md:px-2 md:py-1 text-xs rounded" style={{color:textColor, background, borderColor}}>
      {children}
    </span>
  )
}