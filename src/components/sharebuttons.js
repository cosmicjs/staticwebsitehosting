import React from "react"
import {
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share"

const buttonConfigs = {
  twitter: { Button: TwitterShareButton, Icon: TwitterIcon },
  facebook: { Button: FacebookShareButton, Icon: FacebookIcon },
  reddit: { Button: RedditShareButton, Icon: RedditIcon },
}

const ShareButton = ({ className }) => {
  const shareUrl = "https://www.staticwebsitehosting.org"
  const shareText = "Check out Static Website Hosting, a leaderboard of static website hosting providers."

  return (
    <div className={className}>
      {["twitter", "facebook", "reddit"].map(type => {
        const { Button, Icon } = buttonConfigs[type]
        return (
          <Button
            url={shareUrl}
            title={shareText}
            className={`mx-1 shareicon-${type}`}
          >
            <Icon size={40} round bgStyle={{ fill: "#2D3748" }} />
          </Button>
        )
      })}
    </div>
  )
}

export default ShareButton
