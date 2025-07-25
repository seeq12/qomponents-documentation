// TypeScript type definitions for Carousel props
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const carouselProps: PropDefinition[] = [
  {
    name: 'testId',
    type: 'string',
    required: false,
    description: ' Test ID attribute for the carousel container used in automated testing. Applied to the main carousel element for test targeting and interaction. ',
  },
  {
    name: 'extraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to the carousel container. Use this to customize the carousel\'s appearance, spacing, or layout beyond default styling. ',
  },
  {
    name: 'activeIndex',
    type: 'number',
    required: false,
    description: ' Zero-based index of the currently visible/active slide. Use this for controlled carousel behavior where you manage the active slide externally. When not provided, the carousel manages its own internal state. ',
  },
  {
    name: 'onSlide',
    type: '(nextSlide: number, direction: \'left\' | \'right\') => void',
    required: false,
    description: ' Callback function triggered when the slide changes due to user interaction or auto-sliding. Receives the new slide index and the direction of transition. Use this to sync with external state or implement custom slide change logic. @param nextSlide - The zero-based index of the slide that will become active @param direction - The direction of the slide transition (\'left\' or \'right\') ',
  },
  {
    name: 'autoSlide',
    type: 'boolean',
    required: false,
    description: ' When true, enables automatic slide transitions at regular intervals. The carousel will continuously advance to the next slide without user interaction. Useful for image galleries, testimonials, or promotional content. ',
  },
  {
    name: 'interval',
    type: 'number',
    required: false,
    description: ' Time interval in milliseconds between automatic slide transitions. Only relevant when `autoSlide` is true. Controls how long each slide is displayed before automatically advancing to the next one. @default 3000 ',
  },
  {
    name: 'nextIcon',
    type: 'string',
    required: false,
    description: ' Icon class name for the "next" navigation arrow. Typically uses FontAwesome classes (e.g., \'fc-chevron-right\'). Displayed on the right side to advance to the next slide. ',
  },
  {
    name: 'prevIcon',
    type: 'string',
    required: false,
    description: ' Icon class name for the "previous" navigation arrow. Typically uses FontAwesome classes (e.g., \'fc-chevron-left\'). Displayed on the left side to go back to the previous slide. ',
  },
  {
    name: 'iconExtraClassNames',
    type: 'string',
    required: false,
    description: ' Additional CSS classes to apply to both navigation arrow icons. Use this to customize the size, color, or styling of the arrow icons. ',
  },
  {
    name: 'showArrows',
    type: 'boolean',
    required: false,
    description: ' When true, displays clickable navigation arrows on the left and right sides. Allows users to manually navigate between slides by clicking the arrows. @default true ',
  },
  {
    name: 'showIndicators',
    type: 'boolean',
    required: false,
    description: ' When true, displays clickable dot indicators at the bottom of the carousel. Each dot represents a slide and allows direct navigation to any slide. The active slide\'s indicator is visually highlighted. @default true ',
  },
  {
    name: 'continuous',
    type: 'boolean',
    required: false,
    description: ' When true, enables continuous looping through slides. After the last slide, clicking "next" will go to the first slide. Before the first slide, clicking "previous" will go to the last slide. @default true ',
  },
  {
    name: 'carouselItems',
    type: 'React.ReactNode[]',
    required: true,
    description: ' Array of React elements to display as carousel slides. Each item represents one slide and can contain any content including images, text, cards, or complex components. The order determines slide sequence. ',
  },
];

export { carouselProps };