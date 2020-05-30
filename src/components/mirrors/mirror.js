import Tag from '../tag';

import dayjs from 'dayjs';

export default function Mirror({ mirrorInfo }) {
    return (
        <div className="bg-white p-4 flex hover:shadow-lg transition-all duration-200">
            <section className="flex flex-col items-center flex-shrink-0">
                <div className="flex-grow">
                    <img
                        className="w-12"
                        src={`https://res.devcloud.huaweicloud.com/obsdevui/cn-north-1/mirror/8.2.4.001/frameworks/assets/img/tools/tools-${mirrorInfo.name}.png`}
                    />
                </div>
                <div>
                    <Tag color="green">同步完成</Tag>
                </div>
            </section>
            <section className="flex-grow ml-4 flex flex-col">
                <div className="flex-grow">
                    <div className="text-lg md:text-xl">{mirrorInfo.displayName}</div>
                    <div className="text-xs md:text-sm text-gray-600">{mirrorInfo.msg}</div>
                </div>
                <div className=" text-sm md:text-base text-gray-600 mt-3">{dayjs().format('YYYY-MM-DD HH:mm:ss')}</div>
            </section>
        </div>
    )
}