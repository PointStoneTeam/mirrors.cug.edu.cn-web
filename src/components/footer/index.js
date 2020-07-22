


export default function Footer() {
  return (
    <footer className="bg-white py-5 px-6">
      <div className="container mx-auto">
        <div className="flex items-center">
          <img
            className="h-8 mr-2 md:h-12 md:mr-3"
            src={`/icons/logo.svg`}
          />
          {/* <h2 className="text-md md:text-xl">中国地质大学开源镜像站</h2> */}
        </div>
        <div className="mt-2 text-xs md:text-sm">
          Copyright &copy; 2013 - 2020 中国地质大学开源镜像站由点石团队维护
        </div>
      </div>
    </footer>
  )
}