import ModalVideo from "react-modal-video";

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (open: boolean) => void;
  videoId?: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "PDajqE_U1hs",
}) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        // autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
