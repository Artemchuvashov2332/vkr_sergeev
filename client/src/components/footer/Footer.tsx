import { FC, useMemo } from "react";
import { IFooterProps } from "./Footer.types";
import "./Footer.style.css";
import { AppContainer } from "../../ui/appContainer";
import { Icon } from "../../ui";
import { Link } from "react-router-dom";
import { Navigation } from "../navigation";

export const Footer: FC<IFooterProps> = ({
  navLinks,
  address = "",
  contacts,
  socialLinks,
  additionalInfo,
}) => {
  const contactsLinkData = useMemo(() => {
    if (!contacts?.length) return [];

    return contacts.reduce<{ text: string; href: string }[]>(
      (result, { type, value }) => {
        if (type === "email" || type === "phone") {
          result.push({
            text: type === "email" ? `Почта: ${value}` : `Тел: ${value}`,
            href: type === "email" ? `mailto:${value}` : `tel:${value}`,
          });
        } else {
          result.push({
            text: type,
            href: value,
          });
        }

        return result;
      },
      []
    );
  }, [contacts?.length]);

  return (
    <div className="app-footer-wrapper">
      <AppContainer>
        <footer className="app-footer">
          <Navigation
            links={navLinks}
            listClassName="app-footer_link-list"
            itemClassName="app-footer_link"
          />
          <div className="app-footer_info">
            <span>Адрес: {address}</span>
            {contacts && (
              <ul className="app-footer_contacts">
                {contactsLinkData.map(({ text, href }) => (
                  <li className="app-footer_link" key={href}>
                    <a href={href}>{text}</a>
                  </li>
                ))}
              </ul>
            )}
            {socialLinks && (
              <ul className="app-footer_social-links">
                {socialLinks.map(({ icon, text, value }) => {
                  return (
                    <li key={text} className="app-footer_link">
                      <Icon
                        name={icon}
                        height={20}
                        width={20}
                        alt={text}
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />
                      <a href={value}>{value}</a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          {additionalInfo && (
            <div>
              <p>Дополнительная информация:</p>
              <p>{additionalInfo}</p>
            </div>
          )}
        </footer>
      </AppContainer>
    </div>
  );
};
