import { useNavigate } from "react-router-dom"

type CardData = {
  title: string
  descriptions: string[]
  buttonLabel: string
  Icon: React.ElementType
  href: string
}

type DashboardCardsProps = {
  cards: CardData[]
}

const DashboardCard = ({ card }: { card: CardData }) => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#F9FAFB] dark:bg-dark-2 p-2 border border-gray-200 dark:border-white/20 rounded-lg">
      <div className="flex gap-2">
        <div>
          <card.Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-800 dark:text-white/90 text-base font-medium">
            {card.title}
          </h3>
          {card.descriptions.map((description, index) => (
            <p
              key={description}
              className={`text-gray-600 dark:text-white/70 ${index === 0 ? "text-sm" : "text-xs mt-2"} font-normal`}>
              {description}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="w-full text-xs py-2 px-3 border border-gray-300 dark:border-white/30"
          onClick={() => navigate(card.href)}>
          {card.buttonLabel}
        </button>
      </div>
    </div>
  )
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ cards }) => {
  return (
    <div className="grid gap-5 pt-8">
      {cards.map((card) => (
        <DashboardCard card={card} key={card.title} />
      ))}
    </div>
  )
}

export default DashboardCards
