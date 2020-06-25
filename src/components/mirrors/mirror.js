import Tag from '../tag';

import dayjs from 'dayjs';

import Link from 'next/link'

const statusMap = {
    '-1': {
        text: '未开始',
        color: 'default'
    },
    '0': {
        text: '休息中',
        color: 'default'
    },
    '1': {
        text: '同步中',
        color: 'purple'
    },
    '2': {
        text: '同步成功',
        color: 'green'
    },
    '3': {
        text: '同步失败',
        color: 'red'
    }
}

export default function Mirror({ mirrorInfo, hasDoc = false }) {
    const { text: statusText, color: statusColor } = statusMap[String(mirrorInfo.latest_sync_status)];
    return (
        <div className="mirror-item bg-white p-4 flex  transition-all duration-200 relative">
            <section className="flex flex-col items-center flex-shrink-0">
                <div className="flex-grow">
                    <div className="h-12 w-12 flex items-center justify-center">
                        <img
                            className="w-full h-auto"
                            src={`/icons/mirrors/${mirrorInfo.name}.svg`}
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <Tag color={statusColor}>{statusText}</Tag>
                </div>
            </section>
            <section className="flex-grow ml-4 flex flex-col">
                <div className="flex-grow">
                    <div className="text-lg md:text-xl">{mirrorInfo.display_name}</div>
                    <div className="text-xs md:text-sm text-gray-600">{mirrorInfo.description}</div>
                </div>
                <div className=" text-sm md:text-base text-gray-600 mt-3">
                    {dayjs(mirrorInfo.latest_sync_time).format('YYYY-MM-DD HH:mm:ss')}
                </div>
            </section>
            <section className="overlay flex px-3 justify-around items-center absolute top-0 right-0 bottom-0 left-0 transition-all duration-300">
                <a href={`${process.env.API_URL}/${mirrorInfo.name}`} className="flex flex-col flex-grow justify-center items-center">
                    <img className="h-8 mb-2 flex-grow" src="/icons/files.svg" />
                    <div className="text-xs text-gray-600">文件目录</div>
                </a>
                {hasDoc && (
                    <>
                        <div className="divider"></div>
                        <Link href={`/docs/${mirrorInfo.name}`}>
                            <a className="flex flex-col items-center flex-grow justify-center">
                                <img className="h-8 mb-2 flex-grow" src="/icons/docs.svg" />
                                <div className="text-xs text-gray-600">帮助文档</div>
                            </a>
                        </Link>
                    </>
                )}
            </section>
            <style jsx>{`
            .overlay{
                backdrop-filter: saturate(180%) blur(10px);
                background-color: rgba(255,255,255,0.5);
                opacity: 0;
                pointer-events: none;
            }

            @media screen and (min-width: 768px) {
                .mirror-item:hover .overlay{
                    opacity: 1;
                    pointer-events: auto;
                }
            }

            @media screen and (max-width: 768px) {
                .mirror-item:active .overlay{
                    opacity: 1;
                    pointer-events: auto;
                }
            }

          


            .divider{
                width: 1px;
                height: 40%;
                background: #e2e8f0;
            }

           

            `}</style>
        </div>
    )
}