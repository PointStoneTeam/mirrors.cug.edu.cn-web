
const catalogMap = {
    news: {
        text: '公告',
        color: '#688000'
    },
    tech: {
        text: '技术',
        color: '#4F69F8'
    },
    defalut: {
        text: '默认',
        color: '#86868B'
    }
}


export default function ({ catalog }) {

    const { text, color } = catalogMap[catalog] || catalogMap.defalut;

    if (!catalog) {
        return null;
    }
    return (<span className="ml-2" style={{ color }}># {text} </span>)
}