import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Полный груминг',
    description: 'Купание, стрижка, укладка, чистка ушей',
    price: 'от 2500₽',
    icon: 'Scissors'
  },
  {
    title: 'Экспресс-уход',
    description: 'Быстрое приведение в порядок',
    price: 'от 1500₽',
    icon: 'Sparkles'
  },
  {
    title: 'SPA-уход',
    description: 'Премиум-уход с масками и массажем',
    price: 'от 3500₽',
    icon: 'Heart'
  },
  {
    title: 'Стрижка когтей',
    description: 'Аккуратная обработка когтей',
    price: 'от 500₽',
    icon: 'Star'
  }
];

const groomers = [
  {
    name: 'Анна Петрова',
    experience: '8 лет опыта',
    specialty: 'Эксперт по длинношерстным породам',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  },
  {
    name: 'Мария Иванова',
    experience: '5 лет опыта',
    specialty: 'Специалист по кошкам',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  },
  {
    name: 'Елена Сидорова',
    experience: '6 лет опыта',
    specialty: 'Мастер креативных стрижек',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'
  }
];

const reviews = [
  {
    author: 'Ольга М.',
    text: 'Прекрасный салон! Мой пудель всегда выходит красавцем. Спасибо Анне за профессионализм!',
    rating: 5
  },
  {
    author: 'Дмитрий К.',
    text: 'Отличное обслуживание, чистый салон, приветливый персонал. Рекомендую!',
    rating: 5
  },
  {
    author: 'Светлана В.',
    text: 'Моя кошка очень капризная, но мастера нашли к ней подход. Результат превосходный!',
    rating: 5
  }
];

const gallery = [
  'https://cdn.poehali.dev/projects/a2c4f0e9-c98a-4eda-bad0-6d95b2e9d3ec/files/62d8a833-b787-4192-809e-d5c4ee5fbf9b.jpg',
  'https://cdn.poehali.dev/projects/a2c4f0e9-c98a-4eda-bad0-6d95b2e9d3ec/files/917354e3-ff5f-404b-99f5-e6c7d39a2856.jpg',
  'https://cdn.poehali.dev/projects/a2c4f0e9-c98a-4eda-bad0-6d95b2e9d3ec/files/1dd9d2ec-220a-4eca-b005-504a4598535a.jpg',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800',
  'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800'
];

export default function Index() {
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    petType: '',
    service: '',
    groomer: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    alert('Спасибо за запись! Мы свяжемся с вами для подтверждения.');
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">PetStyle</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#groomers" className="hover:text-primary transition-colors">Мастера</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Онлайн-запись</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами для подтверждения
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="petType">Тип питомца</Label>
                    <Select value={bookingData.petType} onValueChange={(value) => setBookingData({ ...bookingData, petType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Собака</SelectItem>
                        <SelectItem value="cat">Кошка</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга</Label>
                    <Select value={bookingData.service} onValueChange={(value) => setBookingData({ ...bookingData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="groomer">Мастер</Label>
                    <Select value={bookingData.groomer} onValueChange={(value) => setBookingData({ ...bookingData, groomer: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите мастера" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Любой доступный</SelectItem>
                        {groomers.map((groomer) => (
                          <SelectItem key={groomer.name} value={groomer.name}>
                            {groomer.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата</Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время</Label>
                      <Select value={bookingData.time} onValueChange={(value) => setBookingData({ ...bookingData, time: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Дополнительные пожелания</Label>
                    <Textarea
                      id="notes"
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      placeholder="Расскажите о породе, особенностях характера питомца..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Ваш питомец<br />
                <span className="text-primary">заслуживает лучшего</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Профессиональный груминг с любовью и заботой. Опытные мастера, современное оборудование, индивидуальный подход.
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                      Записаться онлайн
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Онлайн-запись</DialogTitle>
                      <DialogDescription>
                        Заполните форму, и мы свяжемся с вами для подтверждения
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name2">Ваше имя</Label>
                          <Input
                            id="name2"
                            required
                            value={bookingData.name}
                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone2">Телефон</Label>
                          <Input
                            id="phone2"
                            type="tel"
                            required
                            value={bookingData.phone}
                            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="petType2">Тип питомца</Label>
                        <Select value={bookingData.petType} onValueChange={(value) => setBookingData({ ...bookingData, petType: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dog">Собака</SelectItem>
                            <SelectItem value="cat">Кошка</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service2">Услуга</Label>
                        <Select value={bookingData.service} onValueChange={(value) => setBookingData({ ...bookingData, service: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.title} value={service.title}>
                                {service.title} - {service.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="groomer2">Мастер</Label>
                        <Select value={bookingData.groomer} onValueChange={(value) => setBookingData({ ...bookingData, groomer: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите мастера" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Любой доступный</SelectItem>
                            {groomers.map((groomer) => (
                              <SelectItem key={groomer.name} value={groomer.name}>
                                {groomer.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date2">Дата</Label>
                          <Input
                            id="date2"
                            type="date"
                            required
                            value={bookingData.date}
                            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time2">Время</Label>
                          <Select value={bookingData.time} onValueChange={(value) => setBookingData({ ...bookingData, time: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10:00">10:00</SelectItem>
                              <SelectItem value="11:00">11:00</SelectItem>
                              <SelectItem value="12:00">12:00</SelectItem>
                              <SelectItem value="14:00">14:00</SelectItem>
                              <SelectItem value="15:00">15:00</SelectItem>
                              <SelectItem value="16:00">16:00</SelectItem>
                              <SelectItem value="17:00">17:00</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes2">Дополнительные пожелания</Label>
                        <Textarea
                          id="notes2"
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                          placeholder="Расскажите о породе, особенностях характера питомца..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a2c4f0e9-c98a-4eda-bad0-6d95b2e9d3ec/files/62d8a833-b787-4192-809e-d5c4ee5fbf9b.jpg" 
                alt="Happy groomed dog"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг для вашего любимца</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея наших работ</h2>
            <p className="text-xl text-muted-foreground">Посмотрите, как преображаются питомцы после груминга</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Icon name="Heart" className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="groomers" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши мастера</h2>
            <p className="text-xl text-muted-foreground">Профессионалы с большим опытом и любовью к животным</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groomers.map((groomer, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
                    <img 
                      src={groomer.image} 
                      alt={groomer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{groomer.name}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon name="Award" className="text-secondary" size={20} />
                      <span>{groomer.experience}</span>
                    </div>
                    <p className="text-foreground/80">{groomer.specialty}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют сотни довольных клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.author}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда рады вам помочь</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-base">
                  г. Москва, ул. Примерная, д. 123
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-secondary" size={32} />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-base">
                  +7 (999) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <CardTitle>Режим работы</CardTitle>
                <CardDescription className="text-base">
                  Ежедневно с 10:00 до 20:00
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">PetStyle</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
            <p className="text-muted-foreground">© 2024 PetStyle. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
