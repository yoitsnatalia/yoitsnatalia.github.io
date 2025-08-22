export default function ProjectCard({ title, description, image, onClick }) {
    return (
      <div className="card" onClick={onClick}>
        <div className="mr-20">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-100 h-70 object-cover rounded-lg border-white border"
            />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="text-8xl mb-3">{title}</h3>
          <p className="ml-2 text-xl">{description}</p>
        </div>
      </div>
    );
  }