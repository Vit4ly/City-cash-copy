<script>
export default {
  name: 'MdIconTile'
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96.591" height="58.842" viewBox="0 0 96.591 58.842">
    <defs>
      <linearGradient id="linear-gradient" x1="0.099" y1="0.482" x2="0.91" y2="0.482" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#3cba70"/>
        <stop offset="1" stop-color="#39c769"/>
      </linearGradient>
      <filter id="Mask" x="0" y="0" width="96.591" height="58.842" filterUnits="userSpaceOnUse">
        <feOffset dy="2" input="SourceAlpha"/>
        <feGaussianBlur result="blur"/>
        <feFlood flood-color="#309029"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <clipPath id="clip-path">
        <rect width="96.591" height="58.842" fill="none"/>
      </clipPath>
      <filter id="Mask-2" x="0" y="0" width="96.591" height="58.842" filterUnits="userSpaceOnUse">
        <feOffset dy="2" input="SourceAlpha"/>
        <feGaussianBlur result="blur-2"/>
        <feFlood flood-color="#309029"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <clipPath id="clip-path-2">
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Mask)">
          <path id="Mask-3" data-name="Mask" d="M8.65,36.05a5.715,5.715,0,0,1,.037-9.921L46.169,4.869a17.2,17.2,0,0,1,17.118.087L99.53,26a5.732,5.732,0,0,1-.029,9.93L62.383,57.2a17.2,17.2,0,0,1-17.144-.028Z" transform="translate(0.05)" fill="url(#linear-gradient)"/>
        </g>
      </clipPath>
      <linearGradient id="linear-gradient-3" x1="0.129" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#65f35c"/>
        <stop offset="1" stop-color="#4ad74e"/>
      </linearGradient>
    </defs>
    <g id="Повторить_сетку_1" data-name="Повторить сетку 1" clip-path="url(#clip-path)">
      <g id="Сгруппировать_1" data-name="Сгруппировать 1" transform="translate(-6.602 -3.267)">
        <g id="Group_18_Copy_31" data-name="Group 18 Copy 31">
          <g id="Path_13_Copy_17" data-name="Path 13 Copy 17" transform="translate(0.761 0.637)">
            <g transform="matrix(1, 0, 0, 1, 5.84, 2.63)" filter="url(#Mask-2)">
              <path id="Mask-4" data-name="Mask" d="M8.65,36.05a5.715,5.715,0,0,1,.037-9.921L46.169,4.869a17.2,17.2,0,0,1,17.118.087L99.53,26a5.732,5.732,0,0,1-.029,9.93L62.383,57.2a17.2,17.2,0,0,1-17.144-.028Z" transform="translate(-5.79 -2.63)" fill="url(#linear-gradient)"/>
            </g>
            <g id="Path_13_Copy_17-2" data-name="Path 13 Copy 17" clip-path="url(#clip-path-2)">
              <path id="Path_13_Copy_17-3" data-name="Path 13 Copy 17" d="M0,18.19,31.756,0,41.31,32.446l-15.84.764Z" transform="translate(-46.511 -93.901)" fill="#070e31" opacity="0.302"/>
              <g id="Group_23" data-name="Group 23" transform="translate(12.199 26.385)">
                <ellipse id="Oval_Copy_10" data-name="Oval Copy 10" cx="2.843" cy="1.312" rx="2.843" ry="1.312" transform="translate(0 3.823)" opacity="0.3" fill="url(#linear-gradient-3)"/>
                <ellipse id="Oval_Copy_12" data-name="Oval Copy 12" cx="2.843" cy="1.312" rx="2.843" ry="1.312" transform="translate(12.15 13.543)" opacity="0.414" fill="url(#linear-gradient-3)"/>
                <ellipse id="Oval_Copy_33" data-name="Oval Copy 33" cx="1.749" cy="0.875" rx="1.749" ry="0.875" transform="translate(72.623 0)" fill="url(#linear-gradient-3)"/>
                <ellipse id="Oval_Copy_29" data-name="Oval Copy 29" cx="2.187" cy="1.094" rx="2.187" ry="1.094" transform="translate(73.71 9.428)" fill="url(#linear-gradient-3)"/>
                <ellipse id="Oval_Copy_30" data-name="Oval Copy 30" cx="2.187" cy="1.094" rx="2.187" ry="1.094" transform="translate(56.454 18.954)" fill="url(#linear-gradient-3)"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<style scoped>
svg {
  cursor: pointer;
}
</style>
