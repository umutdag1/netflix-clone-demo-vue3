import ImageType from '@/types/customType/ImageType'
import HType from '@/types/customType/HType'
import VideoType from '@/types/customType/VideoType'

type InfoCardType = {
  elemName: string
  columnClass: string[]
  columnStyle: object
  imgArr: ImageType[]
  hArr: HType[]
  videoObj: VideoType
}

export default InfoCardType
