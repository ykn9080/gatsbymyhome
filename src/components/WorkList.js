import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import "../css/main.css"

const WorkList = ({ data, type }) => {
  function beTouching(entries, ob) {
    //entries all 30 paragraphs
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("intersecting")
        //console.log(entry.target);
        //console.log(entry.time, entry.intersectionRatio);
        entry.target.classList.add("active")
        //ob.unobserve(entry.target);
      } else {
        entry.target.classList.remove("active")
      }
    })
  }
  const handleContentLoaded = () => {
    let options = {
      root: null,
      rootMargin: "-150px -50px",
      threshold: 0.5,
    }
    let observer = new IntersectionObserver(beTouching, options)
    console.log("runtimg.....")

    document.querySelectorAll(".ImgContainer").forEach(dv => {
      observer.observe(dv)
    })
  }
  useEffect(() => {
    if (type === "work") handleContentLoaded()
  }, [])

  const list = data.map(dt => {
    return { title: dt.frontmatter.title, slug: dt.frontmatter.slug }
  })

  const WkList = ({ data }) => {
    return (
      <>
        <section className="bodycontent">
          {data.map(work => {
            return (
              <div className="ImgContainer">
                <Link
                  to={`/works/${work.frontmatter.slug}`}
                  key={work.title}
                  state={{ list: list }}
                >
                  <h1>{work.frontmatter.title}</h1>
                  <GatsbyImage image={getImage(work.frontmatter.thumb)} />
                </Link>
              </div>
            )
          })}
        </section>
      </>
    )
  }
  const InterestList = ({ data }) => {
    return (
      <div className="interestlist">
        {data.map(dt => {
          return (
            <Link
              to={`/${dt.frontmatter.type}s/${dt.frontmatter.slug}`}
              key={dt.title}
              title={dt.frontmatter.title}
              state={{ list: list }}
            >
              <GatsbyImage image={getImage(dt.frontmatter.thumb)} />
            </Link>
          )
        })}
      </div>
    )
  }

  return type === "work" ? <WkList data={data} /> : <InterestList data={data} />
}

export default WorkList
