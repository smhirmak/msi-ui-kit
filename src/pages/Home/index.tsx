import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Chip from '@/components/Chip';
import InformationStatus from '@/components/InformationStatus';
import Notification from '@/components/Notification';
import SearchBar from '@/components/SearchBar';
import TextField from '@/components/TextField';
import Switch from '@/components/Switch';
import { Avatar, MultipleAvatarContainer } from '@/components/Avatar';
import { useEffect, useRef, useState } from 'react';
import { Plus } from '@/assets/Icons';
import { RadioGroup, RadioGroupItem } from '@/components/RadioButtons';
import Loader, { loaderRef } from '@/components/Loader';
import LoadingSpinner from '@/components/ui/loading-spinner';
import LoadingLinear from '@/components/ui/loading-linear';
import Container from '@/components/Container';
import Skeleton from '@/components/Skeleton';
import CodeBlock from '@/components/CodeBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark, nightOwl, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Home = () => {
  const [value, setValue] = useState('TRA');

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReversed, setIsReversed] = useState(false);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // Video ters mi oynuyor kontrol et
      if (isReversed) {
        // Eğer ters oynuyorsa, normale dön
        videoRef.current.src = '/assets/videos/nature.mp4';
      } else {
        // Eğer normal oynuyorsa, ters versiyona geç
        videoRef.current.src = '/assets/videos/nature-reverse.mp4';
      }
      setIsReversed(!isReversed); // Durumu değiştir
      videoRef.current.play(); // Videoyu başlat
    }
  };

  const exampleCode = `
 const Button = () => {
  const deneme = () => {
    console.log(123);
  };
  return (
    <>
      <button className="1">Click me</button>
      <Button className="2">Click me</Button>
      <Button className="2" id="132" id={123}>Click me</Button>
      <Button className="3" id={123} id={deneme} style={{ }}>Click me</Button>
      <Deneme className="4">Click me</Deneme>
      <Deneme>
        <deneme />
        <Deneme />
      </Deneme>
    </>
  );
};
  `;

  return (
    <Container maxWidth="xl">
      <div>
        {/* <CodeBlock code={exampleCode} language="js" /> */}
        <SyntaxHighlighter language="jsx" style={coldarkDark}>
          {`<>
  <div>
    <button className="1">Click me</button>
    <Button className="2">Click me</Button>
    <Button className="2" id="132" id={123}>Click me</Button>
    <Button className="3" id={123} id={deneme} style={{ }}>Click me</Button>
    <Deneme className="4">Click me</Deneme>
    <Deneme>
      <deneme />
      <Deneme />
    </Deneme>
  </div>
</>
          `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={nightOwl}>
          {`<>
  <div>
    <button className="1">Click me</button>
    <Button className="2">Click me</Button>
    <Button className="2" id="132" id={123}>Click me</Button>
    <Button className="3" id={123} id={deneme} style={{ }}>Click me</Button>
    <Deneme className="4">Click me</Deneme>
    <Deneme>
      <deneme />
      <Deneme />
    </Deneme>
  </div>
</>
          `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {`<>
  <div>
    <button className="1">Click me</button>
    <Button className="2">Click me</Button>
    <Button className="2" id="132" id={123}>Click me</Button>
    <Button className="3" id={123} id={deneme} style={{ }}>Click me</Button>
    <Deneme className="4">Click me</Deneme>
    <Deneme>
      <deneme />
      <Deneme />
    </Deneme>
  </div>
</>
          `}
        </SyntaxHighlighter>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Avatar</p>
        <p className="text-xl mt-2">Small Circular:</p>
        <div className="flex space-x-2 mt-2">
          <Avatar size="sm" />
          <Avatar size="sm" title="Muhammed Semih Irmak" />
          <Avatar size="sm" src="/assets/logos/logo.png" />
          <Avatar size="sm" src="/assets/logos/logo.png" badgeContent={<Badge size="sm" />} />
          <Avatar size="sm" src="/assets/logos/logo.png" badgePosition="bottom-right" badgeContent={<Badge size="sm" color="secondary" />} />
          <Avatar size="sm" src="/assets/logos/logo.png" badgePosition="top-left" badgeContent={<Badge size="sm" color="secondary" />} />
          <Avatar size="sm" src="/assets/logos/logo.png" badgePosition="bottom-left" badgeContent={<Badge size="sm" color="secondary" />} />
        </div>
        <p className="text-xl mt-2">Small Rounded:</p>
        <div className="flex space-x-2 mt-2">
          <Avatar size="sm" variant="rounded" />
          <Avatar size="sm" variant="rounded" title="Muhammed Semih Irmak" />
          <Avatar size="sm" variant="rounded" src="/assets/logos/logo.png" />
          <Avatar size="sm" variant="rounded" src="/assets/logos/logo.png" badgeContent={<Badge size="sm" />} />
          <Avatar size="sm" variant="rounded" badgePosition="bottom-right" src="/assets/logos/logo.png" badgeContent={<Badge size="sm" color="secondary" />} />
          <Avatar size="sm" variant="rounded" badgePosition="top-left" src="/assets/logos/logo.png" badgeContent={<Badge size="sm" color="secondary" />} />
          <Avatar size="sm" variant="rounded" badgePosition="bottom-left" src="/assets/logos/logo.png" badgeContent={<Badge size="sm" color="secondary" />} />
        </div>
        <p className="text-xl mt-2">Multiple Avatar :</p>
        <div className="mt-2">
          <MultipleAvatarContainer lastElementSize="sm">
            <Avatar size="sm" asChild="a" href="/asd" className="bg-tra-neutral-grey text-black" />
            <Avatar size="sm" src="/assets/logos/logo.png" />
            <Avatar size="sm" />
            <Avatar size="sm" className="bg-tra-disabled-light-dark" />
            <Avatar size="sm" src="/assets/logos/logo.png" />
            <Avatar size="sm" />
            <Avatar size="sm" className="bg-error" />
            <Avatar size="sm" src="/assets/logos/logo.png" />
            <Avatar size="sm" src="/assets/logos/logo.png" />
          </MultipleAvatarContainer>
        </div>
        <p className="text-xl mt-2">Large Circular:</p>
        <div className="flex flex-wrap space-x-2 space-y-2 mt-2">
          <Avatar />
          <Avatar title="Muhammed Semih Irmak" />
          <Avatar src="/assets/logos/logo.png" />
          <Avatar src="/assets/logos/logo.png" badgeContent={<Badge />} />
          <Avatar src="/assets/logos/logo.png" badgePosition="bottom-right" badgeContent={<Badge color="secondary" />} />
          <Avatar src="/assets/logos/logo.png" badgePosition="top-left" badgeContent={<Badge />} />
          <Avatar src="/assets/logos/logo.png" badgePosition="bottom-left" badgeContent={<Badge color="secondary" />} />
        </div>
        <p className="text-xl mt-2">Large Rounded:</p>
        <div className="flex flex-wrap space-x-2 space-y-2 mt-2">
          <Avatar variant="rounded" />
          <Avatar variant="rounded" title="Muhammed Semih Irmak" />
          <Avatar variant="rounded" src="/assets/logos/logo.png" />
          <Avatar variant="rounded" src="/assets/logos/logo.png" badgeContent={<Badge icon={<Plus className="h-4 w-4" />} />} />
          <Avatar variant="rounded" src="/assets/logos/logo.png" badgePosition="bottom-right" badgeContent={<Badge icon={<Plus className="h-4 w-4" />} color="primary" />} />
          <Avatar variant="rounded" src="/assets/logos/logo.png" badgePosition="top-left" badgeContent={<Badge icon={<Plus className="h-4 w-4" />} color="primary" />} />
          <Avatar variant="rounded" src="/assets/logos/logo.png" badgePosition="bottom-left" badgeContent={<Badge icon={<Plus className="h-4 w-4" />} color="primary" />} />
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Badge</p>
        <p className="text-xl mt-2">Small:</p>
        <div className="flex space-x-2 mt-2">
          <Badge color="primary" size="sm" />
          <Badge color="error" size="sm" />
          <Badge color="secondary" size="sm" />
          <Badge color="success" size="sm" />
          <Badge color="tetriary" size="sm" />
          <Badge color="warning" size="sm" />
          <Badge icon={<Plus className="h-2 w-2" />} size="sm" />
          <Badge text="S" size="sm" className="text-xs" />
        </div>
        <p className="text-xl mt-2">Default:</p>
        <div className="flex space-x-2 mt-2">
          <Badge color="primary" />
          <Badge color="error" />
          <Badge color="secondary" />
          <Badge color="success" />
          <Badge color="tetriary" />
          <Badge color="warning" />
          <Badge icon={<Plus />} />
          <Badge text="S" />
        </div>
        <p className="text-xl mt-2">Large:</p>
        <div className="flex space-x-2 mt-2">
          <Badge color="primary" size="lg" />
          <Badge color="error" size="lg" />
          <Badge color="secondary" size="lg" />
          <Badge color="success" size="lg" />
          <Badge color="tetriary" size="lg" />
          <Badge color="warning" size="lg" />
          <Badge icon={<Plus />} size="lg" />
          <Badge text="S" size="lg" />
        </div>
        <p className="text-xl mt-2">Default With Text:</p>
        <div className="flex space-x-2 mt-2">
          <Badge color="primary" text="Text" />
          <Badge color="error" text="Text" />
          <Badge color="secondary" text="Text" />
          <Badge color="success" text="Text" />
          <Badge color="tetriary" text="Text" />
          <Badge color="warning" text="Text" />
          <Badge icon={<Plus />} text="Text" />
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Button</p>
        <p className="text-xl mt-2">Solid - Rounded Default:</p>
        <div className="flex space-x-2 mt-2">
          <Button size="icon" variant="solid"><Plus /></Button>
          <Button size="sm" variant="solid">TRA</Button>
          <Button size="default" variant="solid">TRA</Button>
          <Button size="lg" variant="solid">TRA</Button>
          <Button size="lg" variant="solid" disabled>TRA</Button>
          <Button size="icon" variant="solid" loading>TRA</Button>
          <Button size="sm" variant="solid" loading loadingText="Sending">TRA</Button>
          <Button size="default" variant="solid" loading loadingText="Sending">TRA</Button>
          <Button size="lg" variant="solid" loading loadingText="Sending">TRA</Button>
          <Button size="icon" variant="solid" color="secondary">TRA</Button>
          <Button size="sm" variant="solid" color="secondary">TRA</Button>
          <Button size="default" variant="solid" color="secondary">TRA</Button>
          <Button size="lg" variant="solid" color="secondary">TRA</Button>
          <Button size="lg" variant="solid" color="secondary" loading loadingText="Sending">TRA</Button>
          <Button size="icon" variant="solid" color="tetriary">TRA</Button>
          <Button size="sm" variant="solid" color="tetriary">TRA</Button>
          <Button size="default" variant="solid" color="tetriary">TRA</Button>
          <Button size="lg" variant="solid" color="tetriary">TRA</Button>
          <Button size="lg" variant="solid" color="tetriary" loading loadingText="Sending">TRA</Button>
        </div>
        <p className="text-xl mt-2">Solid - Rounded Large:</p>
        <div className="flex space-x-2 mt-2">
          <Button rounded="lg" size="icon" variant="solid"><Plus /></Button>
          <Button rounded="lg" size="sm" variant="solid">TRA</Button>
          <Button rounded="lg" size="default" variant="solid">TRA</Button>
          <Button rounded="lg" size="lg" variant="solid">TRA</Button>
          <Button rounded="lg" size="lg" variant="solid" disabled>TRA</Button>
          <Button rounded="lg" size="icon" variant="solid" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="sm" variant="solid" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" variant="solid" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="lg" variant="solid" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="icon" variant="solid" color="secondary">TRA</Button>
          <Button rounded="lg" size="sm" variant="solid" color="secondary">TRA</Button>
          <Button rounded="lg" size="default" variant="solid" color="secondary">TRA</Button>
          <Button rounded="lg" size="lg" variant="solid" color="secondary">TRA</Button>
          <Button rounded="lg" size="lg" variant="solid" color="secondary" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="icon" variant="solid" color="tetriary">TRA</Button>
          <Button rounded="lg" size="sm" variant="solid" color="tetriary">TRA</Button>
          <Button rounded="lg" size="default" variant="solid" color="tetriary">TRA</Button>
          <Button rounded="lg" size="lg" variant="solid" color="tetriary">TRA</Button>
          <Button rounded="lg" size="lg" variant="solid" color="tetriary" loading loadingText="Sending">TRA</Button>
        </div>
        <p className="text-xl mt-2">Outlined - Rounded Default:</p>
        <div className="flex space-x-2 mt-2">
          <Button size="icon" variant="outlined">TRA</Button>
          <Button size="sm" variant="outlined">TRA</Button>
          <Button size="default" variant="outlined">TRA</Button>
          <Button size="lg" variant="outlined">TRA</Button>
          <Button size="lg" variant="outlined" disabled>TRA</Button>
          <Button size="icon" variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button size="sm" variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button size="lg" variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button size="icon" variant="outlined" color="secondary">TRA</Button>
          <Button size="sm" variant="outlined" color="secondary">TRA</Button>
          <Button size="default" variant="outlined" color="secondary">TRA</Button>
          <Button size="lg" variant="outlined" color="secondary">TRA</Button>
          <Button size="lg" variant="outlined" color="secondary" loading loadingText="Sending">TRA</Button>
          <Button size="icon" variant="outlined" color="tetriary">TRA</Button>
          <Button size="sm" variant="outlined" color="tetriary">TRA</Button>
          <Button size="default" variant="outlined" color="tetriary">TRA</Button>
          <Button size="lg" variant="outlined" color="tetriary">TRA</Button>
          <Button size="lg" variant="outlined" color="tetriary" loading loadingText="Sending">TRA</Button>
        </div>
        <p className="text-xl mt-2">Outlined - Rounded Large:</p>
        <div className="flex space-x-2 mt-2">
          <Button rounded="lg" size="icon" variant="outlined">TRA</Button>
          <Button rounded="lg" size="sm" variant="outlined">TRA</Button>
          <Button rounded="lg" size="default" variant="outlined">TRA</Button>
          <Button rounded="lg" size="lg" variant="outlined">TRA</Button>
          <Button rounded="lg" size="lg" variant="outlined" disabled>TRA</Button>
          <Button rounded="lg" size="icon" variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="sm" variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="lg" variant="outlined" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="icon" variant="outlined" color="secondary">TRA</Button>
          <Button rounded="lg" size="sm" variant="outlined" color="secondary">TRA</Button>
          <Button rounded="lg" size="default" variant="outlined" color="secondary">TRA</Button>
          <Button rounded="lg" size="lg" variant="outlined" color="secondary">TRA</Button>
          <Button rounded="lg" size="lg" variant="outlined" color="secondary" loading loadingText="Sending">TRA</Button>
          <Button rounded="lg" size="icon" variant="outlined" color="tetriary">TRA</Button>
          <Button rounded="lg" size="sm" variant="outlined" color="tetriary">TRA</Button>
          <Button rounded="lg" size="default" variant="outlined" color="tetriary">TRA</Button>
          <Button rounded="lg" size="lg" variant="outlined" color="tetriary">TRA</Button>
          <Button rounded="lg" size="lg" variant="outlined" color="tetriary" loading loadingText="Sending">TRA</Button>
        </div>
        <p className="text-xl mt-2">Ghost:</p>
        <div className="flex space-x-2 mt-2">
          <Button size="icon" variant="ghost">TRA</Button>
          <Button size="sm" variant="ghost">TRA</Button>
          <Button size="default" variant="ghost">TRA</Button>
          <Button size="lg" variant="ghost">TRA</Button>
          <Button size="lg" variant="ghost" disabled>TRA</Button>
          <Button size="icon" variant="ghost" loading loadingText="Sending">TRA</Button>
          <Button size="sm" variant="ghost" loading loadingText="Sending">TRA</Button>
          <Button variant="ghost" loading loadingText="Sending">TRA</Button>
          <Button size="lg" variant="ghost" loading loadingText="Sending">TRA</Button>
          <Button size="icon" variant="ghost" color="secondary">TRA</Button>
          <Button size="sm" variant="ghost" color="secondary">TRA</Button>
          <Button size="default" variant="ghost" color="secondary">TRA</Button>
          <Button size="lg" variant="ghost" color="secondary">TRA</Button>
          <Button size="lg" variant="ghost" color="secondary" loading loadingText="Sending">TRA</Button>
          <Button size="icon" variant="ghost" color="tetriary">TRA</Button>
          <Button size="sm" variant="ghost" color="tetriary">TRA</Button>
          <Button size="default" variant="ghost" color="tetriary">TRA</Button>
          <Button size="lg" variant="ghost" color="tetriary">TRA</Button>
          <Button size="lg" variant="ghost" color="tetriary" loading loadingText="Sending">TRA</Button>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Checkbox</p>
        <p className="text-xl mt-2">Small Rectangular:</p>
        <div className="flex space-x-2 mt-2">
          <Checkbox id="1" size="sm" />
          <Checkbox id="2" size="sm" label="TRA" />
          <Checkbox id="3" size="sm" disabled label="TRA" />
        </div>
        <p className="text-xl mt-2">Defalut Rectangular:</p>
        <div className="flex space-x-2 mt-2">
          <Checkbox id="4" />
          <Checkbox id="5" label="TRA" />
          <Checkbox id="6" disabled label="TRA" />
        </div>
        <p className="text-xl mt-2">Large Rectangular:</p>
        <div className="flex space-x-2 mt-2">
          <Checkbox id="7" size="lg" />
          <Checkbox id="8" size="lg" label="TRA" />
          <Checkbox id="9" size="lg" disabled label="TRA" />
        </div>
        <p className="text-xl mt-2">Small Circular:</p>
        <div className="flex space-x-2 mt-2">
          <Checkbox id="10" size="sm" variant="circular" />
          <Checkbox id="11" size="sm" variant="circular" label="TRA" />
          <Checkbox id="12" size="sm" variant="circular" disabled label="TRA" />
        </div>
        <p className="text-xl mt-2">Default Circular:</p>
        <div className="flex space-x-2 mt-2">
          <Checkbox id="13" />
          <Checkbox id="14" variant="circular" label="TRA" />
          <Checkbox id="14" variant="circular" disabled label="TRA" />
        </div>
        <p className="text-xl mt-2">Large Circular:</p>
        <div className="flex space-x-2 mt-2">
          <Checkbox id="16" size="lg" variant="circular" />
          <Checkbox id="17" size="lg" variant="circular" label="TRA" />
          <Checkbox id="18" size="lg" variant="circular" disabled label="TRA" />
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Chip</p>
        <p className="text-xl mt-2">Small:</p>
        <div className="flex flex-col space-x-2 mt-2">
          <div className="flex space-x-2 mt-2">
            <Chip size="sm" />
            <Chip size="sm" active />
            <Chip size="sm" selected />
            <Chip size="sm" label="TRA" />
            <Chip size="sm" label="TRA" active />
            <Chip size="sm" label="TRA" selected />
            <Chip size="sm" label="TRA" startIcon={<Plus />} />
            <Chip size="sm" label="TRA" active startIcon={<Plus />} />
            <Chip size="sm" label="TRA" selected startIcon={<Plus />} />
          </div>
          <div className="flex space-x-2 mt-2">
            <Chip size="sm" label="TRA" endIcon={<Plus />} />
            <Chip size="sm" label="TRA" active endIcon={<Plus />} />
            <Chip size="sm" label="TRA" selected endIcon={<Plus />} />
            <Chip size="sm" label="TRA" onDelete={() => { }} />
            <Chip size="sm" label="TRA" active onDelete={() => { }} />
            <Chip size="sm" label="TRA" selected onDelete={() => { }} />
            <Chip size="sm" label="TRA" onClick={() => { }} />
            <Chip size="sm" label="TRA" active onClick={() => { }} />
            <Chip size="sm" label="TRA" selected onClick={() => { }} />
          </div>
        </div>
        <p className="text-xl mt-2">Default:</p>
        <div className="flex flex-col space-x-2 mt-2">
          <div className="flex space-x-2 mt-2">
            <Chip />
            <Chip active />
            <Chip selected />
            <Chip label="TRA" />
            <Chip label="TRA" active />
            <Chip label="TRA" selected />
            <Chip label="TRA" startIcon={<Plus />} />
            <Chip label="TRA" active startIcon={<Plus />} />
            <Chip label="TRA" selected startIcon={<Plus />} />
            <Chip label="TRA" endIcon={<Plus />} />
          </div>
          <div className="flex space-x-2 mt-2">
            <Chip label="TRA" active endIcon={<Plus />} />
            <Chip label="TRA" selected endIcon={<Plus />} />
            <Chip label="TRA" onDelete={() => { }} />
            <Chip label="TRA" active onDelete={() => { }} />
            <Chip label="TRA" selected onDelete={() => { }} />
            <Chip label="TRA" onClick={() => { }} />
            <Chip label="TRA" active onClick={() => { }} />
            <Chip label="TRA" selected onClick={() => { }} />
          </div>
        </div>
        <p className="text-xl mt-2">Large:</p>
        <div className="flex flex-col space-x-2 mt-2">
          <div className="flex space-x-2 mt-2">
            <Chip />
            <Chip size="lg" active />
            <Chip size="lg" selected />
            <Chip size="lg" label="TRA" />
            <Chip size="lg" label="TRA" active />
            <Chip size="lg" label="TRA" selected />
            <Chip size="lg" label="TRA" startIcon={<Plus />} />
            <Chip size="lg" label="TRA" active startIcon={<Plus />} />
            <Chip size="lg" label="TRA" selected startIcon={<Plus />} />
            <Chip size="lg" label="TRA" endIcon={<Plus />} />
          </div>
          <div className="flex space-x-2 mt-2">
            <Chip size="lg" label="TRA" active endIcon={<Plus />} />
            <Chip size="lg" label="TRA" selected endIcon={<Plus />} />
            <Chip size="lg" label="TRA" onDelete={() => { }} />
            <Chip size="lg" label="TRA" active onDelete={() => { }} />
            <Chip size="lg" label="TRA" selected onDelete={() => { }} />
            <Chip size="lg" label="TRA" onClick={() => { }} />
            <Chip size="lg" label="TRA" active onClick={() => { }} />
            <Chip size="lg" label="TRA" selected onClick={() => { }} />
          </div>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Information Status</p>
        <p className="text-xl mt-2">Without Icon:</p>
        <div className="flex space-x-2 mt-2">
          <InformationStatus title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
          <InformationStatus type="warning" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
          <InformationStatus type="error" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
        </div>
        <p className="text-xl mt-2">With Icon:</p>
        <div className="flex space-x-2 mt-2">
          <InformationStatus isHaveIcon title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
          <InformationStatus type="warning" isHaveIcon title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
          <InformationStatus type="error" isHaveIcon title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
        </div>
        <p className="text-xl mt-2">With Custom Icon:</p>
        <div className="flex space-x-2 mt-2">
          <InformationStatus isHaveIcon icon={<Plus />} title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
          <InformationStatus type="warning" isHaveIcon icon={<Plus />} title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
          <InformationStatus type="error" isHaveIcon icon={<Plus />} title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit." />
        </div>
      </div>
      <div>
        <p className="text-4xl underline">Loader</p>
        <Loader />
        <p className="text-xl mt-2">Circular:</p>
        <LoadingSpinner />
        <p className="text-xl mt-2">Linear:</p>
        <LoadingLinear />
        {/* <Button onClick={() => loaderRef.current.incLoader()}>Show Loader</Button>
        <Button onClick={() => loaderRef.current.decLoader()}>Show Loader</Button> */}
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Inputs Filled</p>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl mt-2">Small:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} showRequiredIcon label="TRA" size="sm" />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" size="sm" />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="Error" size="sm" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="Error" size="sm" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="Disabled" size="sm" disabled />
          </div>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} label="Tooltip" size="sm" tooltip={['Deneme1', 'Deneme2']} />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" size="sm" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" size="sm" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" size="sm" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl mt-2">Default:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="Error" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="Error" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="Disabled" disabled />
          </div>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" tooltip="Tooltip" />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} label="TRA" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl mt-2">Large:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="Error" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="Error" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="Disabled" disabled />
          </div>
          <div className="flex space-x-4">
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="TRA" tooltip="Tooltip" />
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="TRA" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="TRA" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} size="lg" label="TRA" borderRadius="lg" />
          </div>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Inputs Outlined</p>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl my-2">Small:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" size="sm" showRequiredIcon />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" size="sm" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="Error" size="sm" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="Error" size="sm" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="Disabled" size="sm" disabled />
          </div>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" size="sm" tooltip="Tooltip" showRequiredIcon />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" size="sm" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" size="sm" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" size="sm" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl my-2">Default:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="Error" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="Error" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="Disabled" disabled />
          </div>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" tooltip="Tooltip" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" label="TRA" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl mt-2 mb-4">Large:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="Error" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="Error" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="Disabled" disabled />
          </div>
          <div className="flex space-x-4">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="TRA" tooltip="Tooltip" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="TRA" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="TRA" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" size="lg" label="TRA" borderRadius="lg" />
          </div>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Inputs Underlined</p>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl my-2">Small:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" size="sm" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" size="sm" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="Error" size="sm" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="Error" size="sm" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="Disabled" size="sm" disabled />
          </div>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" size="sm" tooltip="Tooltip" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" size="sm" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" size="sm" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" size="sm" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2">
          <p className="text-xl mt-2 mb-3">Default:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="Error" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="Error" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="Disabled" disabled />
          </div>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" tooltip="Tooltip" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" label="TRA" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2 space-y-2">
          <p className="text-xl mt-2 mb-4">Large:</p>
          <div className="flex space-x-4 mb-2">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="TRA" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="Error" error />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="Error" error borderRadius="lg" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="Disabled" disabled />
          </div>
          <div className="flex space-x-4">
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="TRA" tooltip="Tooltip" />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="TRA" startIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="TRA" endIcon={<Plus />} />
            <TextField value={value} onChange={e => setValue(e.target.value)} variant="underlined" size="lg" label="TRA" borderRadius="lg" />
          </div>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Notification</p>
        <div className="flex space-x-2 mt-2 border-t-2 py-2">
          <Button onClick={() => Notification.info('Info')}>Info Notification</Button>
          <Button onClick={() => Notification.error('Error')} className="bg-error">Error Notification</Button>
          <Button onClick={() => Notification.success('Success')} className="bg-success text-tra-neutral-white">Success Notification</Button>
          <Button onClick={() => Notification.warn('Warning')} className="bg-warning text-tra-neutral-white">Warning Notification</Button>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Radio Buttons</p>
        <div className="flex mt-2 border-t-2 py-2">
          <RadioGroup className="flex space-x-2">
            <RadioGroupItem label="Deneme" value="0" />
            <RadioGroupItem label="Deneme" value="1" checked />
            <RadioGroupItem label="Deneme" value="1" disabled />
            <RadioGroupItem label="Deneme" value="1" checked disabled />
          </RadioGroup>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl underline">Search Bar</p>
        <div className="mt-2 border-t-2 py-2 space-y-2">
          <p className="text-xl mt-2 mb-2">Small Solid:</p>
          <div className="flex space-x-2 pb-2">
            <SearchBar size="sm" />
            <SearchBar size="sm" label="TRA" />
            <SearchBar size="sm" label="TRA" placeholder="Placeholder" />
            <SearchBar size="sm" label="TRA" disabled />
            <SearchBar size="sm" label="TRA" borderRadius="lg" />
          </div>
          <p className="text-xl mt-2 mb-2">Small Outline:</p>
          <div className="flex space-x-2 pt-2">
            <SearchBar size="sm" variant="outlined" />
            <SearchBar size="sm" variant="outlined" label="TRA" />
            <SearchBar size="sm" variant="outlined" label="TRA" placeholder="Placeholder" />
            <SearchBar size="sm" variant="outlined" label="TRA" disabled />
            <SearchBar size="sm" variant="outlined" label="TRA" borderRadius="lg" />
          </div>
          <p className="text-xl mt-2 mb-2">Small Underlined:</p>
          <div className="flex space-x-2 pt-2">
            <SearchBar size="sm" variant="underlined" />
            <SearchBar size="sm" variant="underlined" label="TRA" />
            <SearchBar size="sm" variant="underlined" label="TRA" placeholder="Placeholder" />
            <SearchBar size="sm" variant="underlined" label="TRA" disabled />
            <SearchBar size="sm" variant="underlined" label="TRA" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2 space-y-2">
          <p className="text-xl mt-2 mb-2">Default Solid:</p>
          <div className="flex space-x-2 pb-2">
            <SearchBar />
            <SearchBar label="TRA" />
            <SearchBar label="TRA" placeholder="Placeholder" />
            <SearchBar label="TRA" disabled />
            <SearchBar label="TRA" borderRadius="lg" />
          </div>
          <p className="text-xl mt-2 mb-2">Default Outline:</p>
          <div className="flex space-x-2 pt-2">
            <SearchBar variant="outlined" />
            <SearchBar variant="outlined" label="TRA" />
            <SearchBar variant="outlined" label="TRA" placeholder="Placeholder" />
            <SearchBar variant="outlined" label="TRA" disabled />
            <SearchBar variant="outlined" label="TRA" borderRadius="lg" />
          </div>
          <p className="text-xl mt-2 mb-2">Default Underlined:</p>
          <div className="flex space-x-2 pt-2">
            <SearchBar variant="underlined" />
            <SearchBar variant="underlined" label="TRA" />
            <SearchBar variant="underlined" label="TRA" placeholder="Placeholder" />
            <SearchBar variant="underlined" label="TRA" disabled />
            <SearchBar variant="underlined" label="TRA" borderRadius="lg" />
          </div>
        </div>
        <div className="mt-2 border-t-2 py-2 space-y-2">
          <p className="text-xl mt-2 mb-2">Large Solid:</p>
          <div className="flex space-x-2 pb-2">
            <SearchBar size="lg" />
            <SearchBar size="lg" label="TRA" />
            <SearchBar size="lg" label="TRA" placeholder="Placeholder" />
            <SearchBar size="lg" label="TRA" disabled />
            <SearchBar size="lg" label="TRA" borderRadius="lg" />
          </div>
          <p className="text-xl mt-2 mb-2">Large Outline:</p>
          <div className="flex space-x-2 pt-2">
            <SearchBar size="lg" variant="outlined" />
            <SearchBar size="lg" variant="outlined" label="TRA" />
            <SearchBar size="lg" variant="outlined" label="TRA" placeholder="Placeholder" />
            <SearchBar size="lg" variant="outlined" label="TRA" disabled />
            <SearchBar size="lg" variant="outlined" label="TRA" borderRadius="lg" />
          </div>
          <p className="text-xl mt-2 mb-2">Large Underline:</p>
          <div className="flex space-x-2 pt-2">
            <SearchBar size="lg" variant="underlined" />
            <SearchBar size="lg" variant="underlined" label="TRA" />
            <SearchBar size="lg" variant="underlined" label="TRA" placeholder="Placeholder" />
            <SearchBar size="lg" variant="underlined" label="TRA" disabled />
            <SearchBar size="lg" variant="underlined" label="TRA" borderRadius="lg" />
          </div>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl">Skeleton</p>
        <div className="flex flex-col space-y-2 mt-2 border-t-2 py-2">
          <Skeleton className="h-2" animation={false} />
          <Skeleton />
          <Skeleton className="h-6" />
          <Skeleton className="h-10" />
        </div>
        <div className="flex flex-col space-y-2 mt-2 border-t-2 py-2">
          <Skeleton className="w-20" />
          <Skeleton animation={false} />
          <div className="flex space-x-2">
            <Skeleton className="w-36" />
            <Skeleton className="w-6" />
            <Skeleton className="w-52" />
            <Skeleton className="w-14" />
            <Skeleton className="w-24" />
            <Skeleton className="w-52" />
          </div>
        </div>
      </div>
      <div className="mb-6 border-b-2 pb-6">
        <p className="text-4xl">Switch</p>
        <div className="flex flex-col space-y-2 mt-2 border-t-2 py-2">
          <p className="text-xl mt-2 mb-2">Apple:</p>
          <Switch variant="apple" />
          <p className="text-xl mt-2 mb-2">Android:</p>
          <Switch variant="android" />
        </div>
      </div>
      {/* <div className="relative w-full h-screen">
        <video
          ref={videoRef}
          autoPlay
          controls
          muted
          loop={false} // Video döngüye alınmayacak çünkü biz manuel olarak değiştireceğiz
          playsInline
          onEnded={handleVideoEnd} // Video bittiğinde bu fonksiyon çalışacak
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        >
          <source src="/assets/videos/nature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <span className="z-50">Deneme</span>
      </div> */}
      <div className="relative w-full h-screen flex justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={false}
          playsInline
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        >
          <source src="/assets/videos/nature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute flex container mx-auto max-w-screen-2xl px-4 w-full h-full">
          <h1>Deneme Deneme</h1>
        </div>
      </div>

    </Container>
  );
};

export default Home;
