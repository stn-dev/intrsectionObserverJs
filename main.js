

/**
 * @param {IntersectionObserverEntry} entries 
 * @param {IntersectionObserver} observer 
 */
function callBack(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const id = entry.target.id
      const a = document.querySelectorAll("a")

      for (let anchor of a) {
        anchor.classList.remove("active")
        if (anchor.hash === `#${id}`) {
          anchor.classList.add("active")
        }
      }
    }
  })
}

const sections = document.querySelectorAll(".section")

if (sections.length > 0) {
  // multiplier la valeur de la taille de l'ecran actuel et le pourcentage d'apparition d'une section avant d'activer l' observer pour qu'elle corespond a toute taille d ecran  
  const y = Math.floor(window.innerHeight * .6)

  const observer = new IntersectionObserver((callBack), {
    // affiner le rootMargin a 1px pour que chaque section puisse le passer sans inclure une autre section 
    rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
  })
  sections.forEach(function (section) {
    observer.observe(section)
  })
}