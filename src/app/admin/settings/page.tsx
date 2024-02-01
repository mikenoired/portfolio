import { MetaSettings } from "@/app/lib/definitions.js";
import Checkbox from "@/app/ui/settings/Checkbox";
import File from "@/app/ui/settings/File";
import Input from "@/app/ui/settings/Input";
import Select from "@/app/ui/settings/Select";
import { settings } from "./data.js";

export default async function Page() {
  const metaSettings = JSON.parse(settings) as MetaSettings;
  return (
    <main className='grid grid-cols-4 px-6 gap-6 relative'>
      <div className='col-start-1 col-end-2 fixed overflow-y-scroll'>
        <div className='font-semibold text-xl'>Main</div>
        <div className='font-semibold text-xl'>
          Robots
          <div className='ml-6 font-semibold text-xl'>Google Bot</div>
        </div>
        <div className='font-semibold text-xl'>Icons</div>
        <div className='font-semibold text-xl'>Manifest</div>
        <div className='font-semibold text-xl'>Apple Web App</div>
      </div>
      <div className='col-start-2 col-end-5'>
        <form className='w-full'>
          <h2 className='text-4xl font-bold'>Main</h2>
          <div className='flex flex-wrap w-full mb-5'>
            <Input name='title' title='Site title' value={metaSettings.title} />
            <Input
              name='description'
              title='Description'
              value={metaSettings.description}
            />
            <Select value={metaSettings.locale} title='Locale' name='locale' />
            <Input
              name='category'
              title='Category'
              value={metaSettings.category}
            />
            <Input
              name='keywords'
              title='Keywords'
              value={metaSettings.keywords}
            />
            <Input
              name='creator'
              title='Creator name'
              value={metaSettings.creator}
            />
            <File title='Manifest' name='manifest' />
          </div>
          <h2 className='text-4xl font-bold'>Robots</h2>
          <div className='flex flex-wrap w-full mb-5'>
            <Checkbox
              value={metaSettings.robots.index}
              title='Index'
              name='index'
            />
            <Checkbox
              value={metaSettings.robots.follow}
              title='Follow'
              name='follow'
            />
            <Checkbox
              value={metaSettings.robots.nocache}
              title='No-cache'
              name='nocache'
            />
          </div>
          <h3 className='text-2xl font-bold'>Google Bot</h3>
          <div className='flex flex-wrap w-full mb-5'>
            <Checkbox
              value={metaSettings.robots.googleBot.index}
              title='Index'
              name='googleBox-index'
            />
            <Checkbox
              value={metaSettings.robots.googleBot.follow}
              title='Follow'
              name='googleBot-follow'
            />
            <Checkbox
              value={metaSettings.robots.googleBot.noimageindex}
              title='No image index'
              name='googleBot-noImageIndex'
            />
            <Select
              value={metaSettings.robots.googleBot.maxVideoPreview}
              title='Max video preview'
              name='googleBot-maxVideoPreview'
            />
            <Select
              value={metaSettings.robots.googleBot.maxImagePreview}
              title='Max image preview'
              name='googleBot-maxImagePreview'
            />
            <Select
              value={metaSettings.robots.googleBot.maxSnippet}
              title='Max snippet'
              name='googleBot-maxSnippet'
            />
          </div>
          <h2 className='text-4xl font-bold'>Icons</h2>
          <div className='flex flex-wrap w-full mb-5'>
            <File name='icon' title='Icon' />
            <File name='apple' title='Apple' />
          </div>
          <h3 className='text-2xl font-bold'>Other</h3>
          <div className='flex flex-wrap w-full mb-5'>
            <Input
              name='icons-other-rel'
              title='Rel'
              value={metaSettings.icons.other.rel}
            />
            <File name='icon' title='Icon' />
          </div>
          <h2 className='text-4xl font-bold'>Apple Web App</h2>
          <div className='flex flex-wrap w-full mb-5'>
            <Input
              name='appleWebApp-title'
              title='Title'
              value={metaSettings.appleWebApp.title}
            />
            <Select
              value={metaSettings.appleWebApp.statusBarStyle}
              title='Status bar style'
              name='appleWebApp-statusBarStyle'
            />
          </div>
          <h3 className='text-2xl font-bold'>Startup Image</h3>
          <div className='flex flex-wrap w-full mb-5'>
            <File name='appleWebApp-startupImage-base' title='Base' />
          </div>
          <h4 className='text-xl font-bold'>Device</h4>
          <div className='flex flex-wrap w-full mb-5'>
            <File name='appleWebApp-startupImage-device-url' title='Url' />
            <Input
              name='appleWebApp-startupImage-device-media'
              title='Media'
              value={metaSettings.appleWebApp.startupImage.device.media}
            />
          </div>
          <h2 className='text-4xl font-bold'>Viewport</h2>
          <div className='flex flex-wrap w-full mb-5'>
            <Input
              name='themeColor'
              title='Theme color'
              value={metaSettings.viewport.themeColor}
            />
            <Input
              name='width'
              title='Width'
              value={metaSettings.viewport.width}
            />
            <Input
              name='initialScale'
              title='Init scale'
              value={metaSettings.viewport.initialScale}
            />
            <Input
              name='maximumScale'
              title='Max scale'
              value={metaSettings.viewport.maximumScale}
            />
            <Checkbox
              value={metaSettings.viewport.userScalable}
              title='Scalable'
              name='userScalable'
            />
          </div>
        </form>
      </div>
    </main>
  );
}
