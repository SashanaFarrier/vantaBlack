import { library } from '@fortawesome/fontawesome-svg-core'
import { faComputer, faHeart, faQuoteLeft, faQuoteRight, faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faComputer, faHeart, faGlobe, faQuoteLeft, faQuoteRight, faCircleCheck, faCircleExclamation)

export { FontAwesomeIcon }
