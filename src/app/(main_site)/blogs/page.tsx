import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import BlogList from "./_components/BlogList";

export default function BlogPage() {
  return (
    <CustomWidthWrapper className="py-12">
      <div className="flex flex-col gap-4 mb-12 min-h-[60vh]">
        <h2>Blogs</h2>
        <p className="font-medium text-gray-600">
          Read interesting blogs about tech industry
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* <div>
            <p className="ml-1 font-medium text-md">Filters</p>
            <div className="flex flex-wrap gap-2 my-3 lg:gap-4">
              {blogCategories.map((cat, id) => (
                <Chip
                  onClick={() => {
                    setActiveFilter(cat.category);
                  }}
                  checked={activeFilter === cat.category}
                  size="lg"
                  key={id}
                  // isActive={activeFilter === cat.category}
                >
                  {cat.category}
                </Chip>
              ))}
            </div>
          </div> */}

          {/* <section className="relative">
            <p className="text-lg uppercase">Search Blog</p>
            <input
              className="py-4 rounded-md bg-background_lightblue px-14"
              placeholder="Read About..."
            />
            <Search className="absolute mx-4 text-gray-500 top-11" />
          </section> */}
        </div>

        <BlogList />
      </div>
    </CustomWidthWrapper>
  );
}
