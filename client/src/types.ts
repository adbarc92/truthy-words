interface MwMeta {
  id: string;
  uuid: string;
  sort: string;
  src: string;
  section: string;
  stems: string[];
  offensive: boolean;
}

interface MwHwiSound {
  audio: string;
  ref: string;
  stat: string;
}

interface MwHwiItem {
  mw: string;
  sound: MwHwiSound;
}

interface MwHwi {
  hw: string;
  prs: MwHwiItem[];
}

export interface MerriamWebsterResponse {
  meta: MwMeta;
  hwi: MwHwi;
  fl: string;
  shortdef: string[];
}
