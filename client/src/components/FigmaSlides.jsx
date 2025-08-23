export default function FigmaSlides() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-10">
      <div className="w-full aspect-video overflow-hidden backdrop-blur-sm">
        <iframe
          className="inset-0 w-full h-full"
          src="https://embed.figma.com/deck/ggtuGimCrJvjbMY8OQyp2X/Gems?node-id=7-152&scaling=contain&content-scaling=responsive&page-id=0%3A1&embed-host=share"
          allowFullScreen
        />
      </div>
    </div>
  )
}