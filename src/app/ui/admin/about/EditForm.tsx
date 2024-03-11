"use client";

import { AboutType, PersonType } from "@/app/lib/definitions";
import Icon from "@/app/ui/Icon";
import MediaManager from "@/app/ui/admin/MediaManager";
import { globalProse } from "@/app/ui/lib/prose";
import { updateAboutPage } from "@/server/pages/about";
import Image from "next/image";
import { useState } from "react";
import Markdown from "react-markdown";

export default function EditForm({
  personData,
  aboutContent,
}: {
  personData: PersonType;
  aboutContent: AboutType;
}) {
  const [content, setContent] = useState(aboutContent?.content);
  const [socials, setSocials] = useState(personData.socials);
  const [avatar, setAvatar] = useState([personData.avatar]);
  const [name, setName] = useState(personData.name);
  const [job, setJob] = useState(personData.job);
  const [place, setPlace] = useState(personData.place);

  const [toggleManager, setToggleManager] = useState(false);
  const [toggleCard, setToggleCard] = useState(false);

  return (
    <>
      {toggleManager && (
        <MediaManager
          active={setToggleManager}
          multiple={false}
          saveHandler={setAvatar}
          initSelected={avatar as string[]}
          fileType='image'
        />
      )}
      <form action={updateAboutPage}>
        <div className='relative mb-6 flex items-center justify-center'>
          <div
            onClick={() => setToggleCard(!toggleCard)}
            className='absolute left-[0px] cursor-pointer text-xl font-semibold'
          >
            {!toggleCard ? "Open person" : "Close person"}
          </div>
          <h1 className='text-3xl font-bold'>Edit about page</h1>
          <button
            type='submit'
            onClick={() => setToggleCard(true)}
            className='absolute right-[0px] cursor-pointer text-xl font-semibold'
          >
            Save
          </button>
        </div>
        {toggleCard && (
          <div className='absolute z-10 box-content w-[300px] bg-white p-5 text-black'>
            <div
              className='relative h-[300px] w-[300px]'
              onClick={() => setToggleManager(true)}
            >
              <Image
                src={`/upload/${avatar}`}
                fill
                className='object-cover'
                alt=''
              />
            </div>
            <input type='text' hidden name='avatar' defaultValue={avatar} />
            <input
              name='name'
              placeholder='Your name'
              className='mt-3 block w-full bg-white text-[28px] font-bold'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name='job'
              placeholder='Add some job'
              className='mt-3 block w-full bg-white text-2xl font-semibold'
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              name='place'
              placeholder='Place of living or your job'
              className='mt-3 block w-full bg-white text-xl font-semibold'
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <div className='mt-6 flex flex-col'>
              {socials &&
                socials.map((link, index) => (
                  <div
                    key={link.id}
                    className='relative mb-3 flex flex-col justify-center'
                  >
                    <input
                      placeholder='Name'
                      className='relative w-3/4 bg-white text-xl font-semibold'
                      value={link.name}
                      onChange={(e) => {
                        const newData = [...socials];
                        newData[index]["name"] = e.target.value;
                        setSocials(newData);
                      }}
                    />
                    <input
                      placeholder='URL'
                      className='relative w-3/4 bg-white text-lg font-medium leading-5'
                      value={link.url}
                      onChange={(e) => {
                        const newData = [...socials];
                        newData[index]["url"] = e.target.value;
                        setSocials(newData);
                      }}
                    />
                    <div
                      className='absolute right-[0px] cursor-pointer'
                      onClick={() => {
                        const newData = [...socials];
                        newData.splice(index, 1);
                        setSocials(newData);
                      }}
                    >
                      <Icon type='close' dark={true} width={20} height={20} />
                    </div>
                  </div>
                ))}
              <button
                onClick={() => {
                  const newData = [...socials];
                  newData.push({
                    name: "",
                    url: "",
                    personCardId: 1,
                    id: socials.length + 1,
                  });
                  setSocials(newData);
                }}
                type='button'
                className='mt-3 bg-black p-4 text-white'
              >
                Add link
              </button>
              <input
                name='socials'
                type='text'
                hidden
                defaultValue={JSON.stringify(socials)}
              />
            </div>
          </div>
        )}
        <div className='grid w-full grid-cols-2 gap-5'>
          <div className='w-full'>
            <label className='mb-3 block text-xl font-semibold'>Markdown</label>
            <textarea
              name='content'
              value={content}
              className='min-h-[200px] w-full border bg-black bg-opacity-0 p-3'
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className='w-full'>
            <label className='mb-3 block text-xl font-semibold'>Preview</label>
            <div className={`prose-lg ${globalProse}`}>
              <Markdown className='w-full'>{content}</Markdown>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
