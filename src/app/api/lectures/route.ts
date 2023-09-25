import { NextResponse } from "next/server";

const mockCategory = {
  id: 0,
  name: "프로그래밍"
};

const mockTags = [
  { id: 0, name: "평생소장" },
  { id: 1, name: "AWS" },
  { id: 2, name: "DevOps" }
];
const leacturesData = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: "일러스트레이터들을 위한 Stable Diffusion과 포토샵 활용법",
      tags: mockTags,
      description:
        "Stable diffusion부터 포토샵까지! 반복 업무 지옥에서 해방시켜줄 AI 활용법",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true
    },
    {
      id: 1,
      category: mockCategory,
      title: "일1러스트레이터들을 위한 Stable Diffusion과 포토샵 활용법",
      tags: mockTags,
      description:
        "Stable diffusion부터 포토샵까지! 반복 업무 지옥에서 해방시켜줄 AI 활용법",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true
    },
    {
      id: 2,
      category: mockCategory,
      title: "일2러스트레이터들을 위한 Stable Diffusion과 포토샵 활용법",
      tags: mockTags,
      description:
        "Stable diffusion부터 포토샵까지! 반복 업무 지옥에서 해방시켜줄 AI 활용법",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true
    },
    {
      id: 3,
      category: mockCategory,
      title: "일3러스트레이터들을 위한 Stable Diffusion과 포토샵 활용법",
      tags: mockTags,
      description:
        "Stable diffusion부터 포토샵까지! 반복 업무 지옥에서 해방시켜줄 AI 활용법",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true
    }
  ]
};

export async function GET(request: Request) {
  return NextResponse.json(leacturesData);
}
