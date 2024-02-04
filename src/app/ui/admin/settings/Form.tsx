"use client";

import { updateSettings } from "@/app/lib/actions";
import { MetaSettings } from "@/app/lib/definitions.js";
import Checkbox from "@/app/ui/admin/settings/Checkbox";
import File from "@/app/ui/admin/settings/File";
import Input from "@/app/ui/admin/settings/Input";
import Select from "@/app/ui/admin/settings/Select";

export default function Form({ metaSettings }: { metaSettings: MetaSettings }) {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        // @ts-ignore
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        await updateSettings(data);
      }}
      className='w-full'
    >
      <h2 className='text-4xl font-bold'>Main</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input name='title' title='Site title' value={metaSettings.title} />
        <Input
          name='description'
          title='Description'
          value={metaSettings.description}
          big
        />
        <Select value={metaSettings.locale} title='Locale' name='locale' />
        <Input name='category' title='Category' value={metaSettings.category} />
        <Input
          name='keywords'
          big
          title='Keywords'
          value={metaSettings.keywords}
        />
        <Input
          name='creator'
          title='Creator name'
          value={metaSettings.creator}
        />
        <File value={metaSettings.manifest} title='Manifest' name='manifest' />
      </div>
      <h2 className='text-4xl font-bold'>Robots</h2>
      <div className='flex flex-wrap w-full mb-5'>
        <Checkbox
          value={metaSettings.robots.index}
          title='Index'
          name='robots_index'
        />
        <Checkbox
          value={metaSettings.robots.follow}
          title='Follow'
          name='robots_follow'
        />
        <Checkbox
          value={metaSettings.robots.nocache}
          title='No-cache'
          name='robots_nocache'
        />
      </div>
      <h3 className='text-2xl font-bold'>Google Bot</h3>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Checkbox
          value={metaSettings.robots.googleBot.index}
          title='Index'
          name='googleBot_index'
        />
        <Checkbox
          value={metaSettings.robots.googleBot.follow}
          title='Follow'
          name='googleBot_follow'
        />
        <Checkbox
          value={metaSettings.robots.googleBot.noimageindex}
          title='No image index'
          name='googleBot_noImageIndex'
        />
        <Select
          value={metaSettings.robots.googleBot.maxVideoPreview}
          title='Max video preview'
          name='googleBot_maxVideoPreview'
        />
        <Select
          value={metaSettings.robots.googleBot.maxImagePreview}
          title='Max image preview'
          name='googleBot_maxImagePreview'
        />
        <Select
          value={metaSettings.robots.googleBot.maxSnippet}
          title='Max snippet'
          name='googleBot_maxSnippet'
        />
      </div>
      <h2 className='text-4xl font-bold'>Icons</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <File value={metaSettings.icons.icon} name='icons_icon' title='Icon' />
        <File
          value={metaSettings.icons.apple}
          name='icons_apple'
          title='Apple'
        />
      </div>
      <h3 className='text-2xl font-bold'>Other</h3>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input
          name='icons_other_rel'
          title='Rel'
          value={metaSettings.icons.other.rel}
        />
        <File
          value={metaSettings.icons.other.url}
          name='icons_other_url'
          title='Icon'
        />
      </div>
      <h2 className='text-4xl font-bold'>Apple Web App</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input
          name='appleWebApp_title'
          title='Title'
          value={metaSettings.appleWebApp.title}
        />
        <Select
          value={metaSettings.appleWebApp.statusBarStyle}
          title='Status bar style'
          name='appleWebApp_statusBarStyle'
        />
      </div>
      <h3 className='text-2xl font-bold'>Startup Image</h3>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <File
          value={metaSettings.appleWebApp.startupImage.base}
          name='appleWebApp_startupImage_base'
          title='Base'
        />
      </div>
      <h4 className='text-xl font-bold'>Device</h4>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <File
          value={metaSettings.appleWebApp.startupImage.device.url}
          name='appleWebApp_startupImage_device_url'
          title='Url'
        />
        <Input
          name='appleWebApp_startupImage_device_media'
          title='Media'
          value={metaSettings.appleWebApp.startupImage.device.media}
        />
      </div>
      <h2 className='text-4xl font-bold'>Viewport</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input
          name='themeColor'
          title='Theme color'
          value={metaSettings.viewport.themeColor}
        />
        <Input name='width' title='Width' value={metaSettings.viewport.width} />
        <Input
          name='initialScale'
          title='Init scale'
          numeric
          value={metaSettings.viewport.initialScale}
        />
        <Input
          name='maximumScale'
          title='Max scale'
          numeric
          value={metaSettings.viewport.maximumScale}
        />
        <Checkbox
          value={metaSettings.viewport.userScalable}
          title='Scalable'
          name='userScalable'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-white text-black p-4 font-semibold text-lg mt-6'
      >
        Save
      </button>
    </form>
  );
}
