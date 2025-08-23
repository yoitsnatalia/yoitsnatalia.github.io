export default function ProjectCard({ title, description, image, onClick }) {
    return (
      <div className="card w-full md:h-auto" onClick={onClick}>
        <div className="md:mr-20">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-50 md:h-70 md:w-100 object-cover rounded-lg"
            />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="text-4xl my-3 sm:text-8xl sm:mb-3">{title}</h3>
          <p className="md:ml-2 text-xl">{description}</p>
        </div>
      </div>
    );
  }