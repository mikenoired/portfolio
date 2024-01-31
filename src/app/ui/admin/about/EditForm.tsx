"use client";

import { updateAboutPage } from "@/app/lib/actions";
import { AboutType, PersonType } from "@/app/lib/definitions";
import Icon from "@/app/ui/Icon";
import MediaManager from "@/app/ui/admin/MediaManager";
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
  const [content, setContent] = useState(aboutContent.content);
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
        <div className='flex relative items-center justify-center mb-6'>
          <div
            onClick={() => setToggleCard(!toggleCard)}
            className='font-semibold text-xl absolute left-[0px] cursor-pointer'
          >
            {!toggleCard ? "Open person" : "Close person"}
          </div>
          <h1 className='font-bold text-3xl'>Edit about page</h1>
          <button
            type='submit'
            onClick={() => setToggleCard(true)}
            className='font-semibold text-xl absolute right-[0px] cursor-pointer'
          >
            Save
          </button>
        </div>
        {toggleCard && (
          <div className='absolute bg-white text-black p-5 z-10 w-[300px] box-content'>
            <div
              className='w-[300px] h-[300px] relative'
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
              className='text-[28px] font-bold mt-3 block bg-white w-full'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name='job'
              className='text-2xl font-semibold mt-3 block bg-white w-full'
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              name='place'
              className='text-xl font-semibold mt-3 block bg-white w-full'
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <div className='mt-6 flex flex-col'>
              {socials &&
                socials.map((link, index) => (
                  <div
                    key={link.id}
                    className='mb-3 relative flex flex-col justify-center'
                  >
                    <input
                      placeholder='Name'
                      className='text-xl font-semibold relative bg-white w-3/4'
                      value={link.name}
                      onChange={(e) => {
                        const newData = [...socials];
                        newData[index]["name"] = e.target.value;
                        setSocials(newData);
                      }}
                    />
                    <input
                      placeholder='URL'
                      className='font-medium relative bg-white text-lg leading-5 w-3/4'
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
                className='p-4 bg-black text-white mt-3'
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
        <div className='w-full grid grid-cols-2 gap-5'>
          <div className='w-full'>
            <label className='text-xl font-semibold mb-3 block'>Markdown</label>
            <textarea
              name='content'
              value={content}
              className='border bg-black bg-opacity-0 p-3 w-full min-h-[200px]'
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className='w-full'>
            <label className='text-xl font-semibold mb-3 block'>Preview</label>
            <div className='prose-xl prose-ul:list-disc prose-ol:list-decimal'>
              <Markdown className='w-full'>{content}</Markdown>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
