import React from 'react';

const SvgHeight = 80;

const Icon = ({  className = '', style, width = SvgHeight, height = SvgHeight, children }) => {
  return (
    <svg className={'g-icon ' + className} style={style} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
};


export const IconCopy = () => <Icon>
  <path d="M34 66.9999C31.7909 66.9999 30 65.2091 30 62.9999V37.0019V29.0003C30 26.7909 31.7913 24.9999 34.0007 25.0003L42.1905 25.0018L57.9996 25C60.2089 24.9998 62 26.7907 62 29L62 62.9999C62 65.2091 60.2091 66.9999 58 66.9999H34Z"/>
  <path d="M30 54.9999H22C19.7909 54.9999 18 53.2091 18 50.9999L18 17C18 14.7907 19.7911 12.9998 22.0004 13L45.9993 13.0003C48.2087 12.9999 50 14.7909 50 17.0003V25.0009"/>
</Icon>

export const IconEdit = () => <Icon>
  <path d="M42 12H16C13.7909 12 12 13.7909 12 16V42"/>
  <path d="M68.0004 36.9116V63.9999C68.0004 66.209 66.2095 67.9999 64.0004 67.9999H36.9121"/>
  <path d="M68.4002 23.139C69.9606 21.5787 69.9606 19.0488 68.4002 17.4884L62.7434 11.8316C61.1796 10.2677 58.6441 10.2677 57.0803 11.8316L18.0555 50.8563C16.771 52.1408 15.9619 53.8243 15.7613 55.6297L14.7984 64.2958C14.7259 64.9483 15.2773 65.4996 15.9298 65.4271L24.5958 64.4642C26.4013 64.2636 28.0847 63.4545 29.3692 62.17L68.4002 23.139Z"/>
  <path d="M48.6035 20.3192L59.911 31.6267"/>
</Icon>

export const IconTrash = () => <Icon>
<path d="M61 20V64C61 66.2091 59.2091 68 57 68H23C20.7909 68 19 66.2091 19 64V20"/>
  <path d="M33 58V30"/>
  <path d="M47 58V30"/>
  <path d="M65 20H15"/>
  <path d="M27.855 19.9986L33.9255 12.3865H46.0742L52.1447 19.9986"/>
</Icon>

export const IconRevert = () => <Icon style={{transform: 'scale(-0.8,0.8)'}}>
  <path d="M36.9629 14.3008C34.5917 14.5721 32.2491 15.1726 30.0048 16.1022C23.6662 18.7277 18.6303 23.7637 16.0048 30.1022C13.3793 36.4407 13.3793 43.5626 16.0048 49.9012C18.6303 56.2397 23.6662 61.2757 30.0048 63.9012C36.3433 66.5267 43.4652 66.5267 49.8038 63.9012C56.1423 61.2757 61.1783 56.2397 63.8038 49.9012L64.1755 49.0037C64.3357 48.6171 64.4851 48.2273 64.6237 47.8347"/>
  <path d="M36.98 14.2984C37.01 14.2949 37.0401 14.2916 37.0702 14.2883M37.0703 6.5961V23.4037C37.0703 25.0998 39.1209 25.9492 40.3202 24.7499L47.9489 17.1212C49.1205 15.9497 49.1205 14.0502 47.9489 12.8786L40.3203 5.24991C39.1209 4.05057 37.0703 4.89999 37.0703 6.5961Z"/>
</Icon>

export const IconMenu = () => <Icon>
  <path d="M16 22L64 22"/>
  <path d="M16 40L64 40"/>
  <path d="M16 58L64 58"/>
</Icon>

export const IconComment = () => <Icon>
  <path d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"/>
</Icon>

export const IconAddComment = () => <Icon>
  <path d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"/>
  <path d="M51.8711 35H27.8711"/>
  <path d="M39.8711 47L39.8711 23"/>
</Icon>

export const IconRemoveComment = () => <Icon>
  <path d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"/>
  <path d="M51.8711 35H27.8711"/>
</Icon>

export const IconCheckOn = () => <Icon>
  <path d="M25.2307 40.1819L33.6693 48.7006C34.4467 49.4853 35.707 49.4853 36.4844 48.7006L54.7692 30.2424"/>
  <path d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"/>
</Icon>

export const IconApprove = () => <Icon>
  <rect x="16" y="16" width="48" height="48" fill="var(--color-success)"/>
  <path d="M25.2307 40.1819L33.6693 48.7006C34.4467 49.4853 35.707 49.4853 36.4844 48.7006L54.7692 30.2424"/>
  <path d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"/>
</Icon>

export const IconCheckOff = () => <Icon>
  <path d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"/>
</Icon>

export const IconDiff = () => <Icon>
  <path d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"/>
  <path d="M40 64L40 16"/>
  <path d="M39.9998 59.364L34.0659 64.0001"/>
  <path d="M39.9999 49.9644L22.0352 63.9999"/>
  <path d="M40 40.5769L16 59.3278"/>
  <path d="M40 31.1833L16 49.9342"/>
  <path d="M40 21.7898L16 40.5406"/>
  <path d="M35.3873 16L16 31.147"/>
  <path d="M23.3501 16L16 21.7425"/>
</Icon>

export const IconLoad = () => <Icon className='li-spin'>
  <path d="M55.1518 20.1026C51.8232 17.5508 47.9999 15.9495 44.0504 15.2987L44.027 9.23021C49.5374 9.95449 54.8904 12.1593 59.4427 15.8447L55.1518 20.1026Z"/>
  <path d="M60.3934 25.5469L64.6719 21.2353C68.1467 25.8072 70.1825 31.1236 70.7791 36.5677L64.731 36.5444C64.1978 32.6617 62.7519 28.8803 60.3934 25.5469Z"/>
  <path d="M64.6217 44.1031L70.6919 44.0797C69.979 49.4328 67.8683 54.6354 64.3598 59.0973L60.093 54.7975C62.479 51.5681 63.9886 47.8945 64.6217 44.1031Z"/>
  <path d="M54.7397 60.1356L59.0411 64.4039C54.5778 67.8968 49.378 69.9949 44.0297 70.6984L44.0532 64.6298C47.8397 64.0054 51.5101 62.5074 54.7397 60.1356Z"/>
  <path d="M36.494 64.7238L36.5174 70.7734C31.0909 70.1697 25.7934 68.1358 21.2356 64.6718L25.5472 60.3934C28.8661 62.7416 32.6291 64.185 36.494 64.7238Z"/>
  <path d="M20.1026 55.1515L15.8448 59.4424C12.1707 54.9041 9.96813 49.5699 9.23705 44.0773L15.3072 44.1007C15.9633 48.0323 17.5618 51.8371 20.1026 55.1515Z"/>
  <path d="M15.198 36.5468L9.1499 36.5701C9.76151 30.9855 11.8874 25.5353 15.5276 20.885L19.7958 25.1864C17.2828 28.6071 15.7502 32.5226 15.198 36.5468Z"/>
  <path d="M25.1286 19.8383L20.8288 15.5716C25.4775 11.9154 30.9305 9.7766 36.5202 9.15527L36.4968 15.2047C32.4675 15.766 28.5488 17.3105 25.1286 19.8383Z"/>
</Icon>

const SquareHeigh = 48;

export const IconStats = ({ approved = 0.5, filled = 0.4 }) => <Icon width={128}>
  <rect x="16" y={64 - SquareHeigh * approved} width="48" height={SquareHeigh * approved} fill="var(--color-success)"/>
  <rect x="64" y={64 - SquareHeigh * filled} width="48" height={SquareHeigh * filled} fill="currentColor" opacity={0.7} />
  <path d="M25.2307 40.1819L33.6693 48.7006C34.4467 49.4853 35.707 49.4853 36.4844 48.7006L54.7692 30.2424"/>
  <path d="M16 18C16 16.8954 17.7908 16 20 16H108C110.209 16 112 16.8954 112 18V62C112 63.1046 110.209 64 108 64H20C17.7908 64 16 63.1046 16 62V18Z"/>
  <path d="M64 18C64 16.8954 64.8954 16 66 16H110C111.105 16 112 16.8954 112 18V62C112 63.1046 111.105 64 110 64H66C64.8954 64 64 63.1046 64 62V18Z"/>
</Icon>

export const IconAdd = () => <Icon>
  <path d="M61.7637 40L17.7637 40"/>
  <path d="M39.7637 62L39.7637 18"/>
</Icon>


export const IconPin = () => <Icon>
  <path d="M39.9998 48.75V67.25"/>
  <path d="M51.9998 12.75C51.9998 15.2924 50.8138 17.5578 48.9649 19.0232L51.5842 36.0488C54.7639 38.2544 57.2743 41.3412 58.7781 44.9718C59.2868 46.1999 59.6701 47.4655 59.9279 48.75H20.072C20.3298 47.4655 20.7131 46.1999 21.2218 44.9718C22.7256 41.3413 25.2358 38.2547 28.4153 36.0492L31.0347 19.0232C29.1857 17.5578 27.9998 15.2924 27.9998 12.75H51.9998Z"/>
</Icon>


export const IconAlert = () => <Icon>
  <path d="M39.6274 17C35.384 17 31.3143 18.6857 28.3137 21.6863L27.6863 22.3137C24.6857 25.3143 23 29.384 23 33.6274V36.5656C23 41.9665 20.8545 47.1461 17.0355 50.9651C16.3725 51.6281 16 52.5273 16 53.4649C16 55.4173 17.5828 57.0001 19.5352 57.0001H60.4648C62.4172 57.0001 64 55.4173 64 53.4649C64 52.5273 63.6275 51.6281 62.9645 50.9651C59.1455 47.1461 57 41.9665 57 36.5656V33.6274C57 29.384 55.3143 25.3143 52.3137 22.3137L51.6863 21.6863C48.6857 18.6857 44.616 17 40.3726 17H39.6274Z"/>
  <path d="M33.7549 57C33.3124 57.9211 33.0718 58.9434 33.0718 60C33.0718 62.4752 34.3923 64.7624 36.5359 66C38.6795 67.2376 41.3205 67.2376 43.4641 66C45.6077 64.7624 46.9282 62.4752 46.9282 60C46.9282 58.9434 46.6876 57.9211 46.245 57"/>
  <path d="M42 17.0829V14C42 12.8954 41.1046 12 40 12C38.8954 12 38 12.8954 38 14V17.0829"/>
  <path d="M38.5936 26.4971L39.4689 40.501C39.4864 40.7815 39.719 41 40.0001 41C40.2811 41 40.5137 40.7815 40.5312 40.501L41.4065 26.4971C41.4572 25.6858 40.8129 25 40.0001 25C39.1872 25 38.5429 25.6858 38.5936 26.4971Z"/>
  <path d="M40 47C39.4477 47 39 47.4477 39 48C39 48.5523 39.4477 49 40 49C40.5523 49 41 48.5523 41 48C41 47.4477 40.5523 47 40 47Z"/>
</Icon>


export const IconCode = () => <Icon>
  <path d="M30 64.1641L50 16.1641"/>
  <path d="M23 24.1641L5.84089 39.4167C5.39337 39.8144 5.39337 40.5137 5.84088 40.9115L23 56.1641"/>
  <path d="M57 24.1641L74.1592 39.4167C74.6067 39.8144 74.6067 40.5137 74.1592 40.9115L57 56.1641"/>
</Icon>